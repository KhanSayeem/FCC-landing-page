#!/usr/bin/env node
/**
 * Sitemap generator for daywinlabs.com
 *
 * Supports scanning a local directory (e.g. Next.js `src/pages`) and/or
 * crawling a live domain to collect URLs, then writes a standards-compliant
 * sitemap.xml file.
 *
 * Requires Node.js 18+ for the built-in fetch API.
 *
 * Usage examples:
 *   node generate-sitemap.js
 *   node generate-sitemap.js --domain=https://daywinlabs.com --out=./public/sitemap.xml
 *   node generate-sitemap.js --domain=https://daywinlabs.com --scanDir=./dist --crawl=false
 */

const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const { URL } = require('node:url');

const DEFAULT_BASE_DOMAIN = 'https://daywinlabs.com';
const DEFAULT_SCAN_DIR = path.join(process.cwd(), 'src', 'pages');
const DEFAULT_OUT_PATH = path.join(process.cwd(), 'sitemap.xml');
const DEFAULT_MAX_PAGES = 500;

function parseArgs(argv) {
  const args = {};
  for (const raw of argv.slice(2)) {
    if (!raw.startsWith('--')) continue;
    const eqIndex = raw.indexOf('=');
    if (eqIndex === -1) {
      args[raw.slice(2)] = true;
    } else {
      const key = raw.slice(2, eqIndex);
      const value = raw.slice(eqIndex + 1);
      args[key] = value;
    }
  }
  return args;
}

function normalizeBaseDomain(input) {
  if (!input) return DEFAULT_BASE_DOMAIN;
  const trimmed = input.trim().replace(/\/+$/, '');
  if (!/^https?:\/\//i.test(trimmed)) {
    throw new Error(`Invalid domain "${input}". Include the protocol, e.g. https://daywinlabs.com.`);
  }
  return trimmed.toLowerCase();
}

function resolveOutputPath(outArg) {
  if (!outArg) return DEFAULT_OUT_PATH;
  const resolved = path.isAbsolute(outArg) ? outArg : path.resolve(process.cwd(), outArg);
  const dir = path.dirname(resolved);
  if (!fs.existsSync(dir)) {
    throw new Error(`Output directory does not exist: ${dir}`);
  }
  return resolved;
}

function sanitizeRoute(route) {
  if (!route) return null;
  let cleaned = route.replace(/\/+/g, '/');
  if (!cleaned.startsWith('/')) cleaned = `/${cleaned}`;
  if (cleaned !== '/' && cleaned.endsWith('/')) cleaned = cleaned.slice(0, -1);
  return cleaned;
}

function filePathToRoute(filePath, rootDir) {
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  if (!relPath) return null;
  if (relPath.startsWith('api/')) return null;
  if (/\[[^/]+?\]/.test(relPath)) return null; // Skip dynamic routes
  let route = relPath.replace(/\.[^.]+$/, '');
  if (route === 'index') return '/';
  route = route.replace(/\/index$/, '');
  return sanitizeRoute(route);
}

function inferChangefreq(route) {
  if (route === '/') return 'weekly';
  if (route.includes('/blog')) return 'daily';
  return 'weekly';
}

function inferPriority(route) {
  if (route === '/') return '1.0';
  const depth = route.split('/').filter(Boolean).length;
  return depth <= 1 ? '0.8' : '0.5';
}

function isoDateFromFile(stats) {
  return stats.mtime.toISOString();
}

async function gatherRoutesFromDir(baseDir, baseUrl) {
  if (!fs.existsSync(baseDir)) {
    return [];
  }
  const fileEntries = [];
  const walk = async (dir) => {
    const entries = await fsp.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (/\.(tsx?|jsx?|mdx?|md|html?)$/i.test(entry.name)) {
        fileEntries.push(fullPath);
      }
    }
  };
  await walk(baseDir);

  const routes = [];
  for (const file of fileEntries) {
    const route = filePathToRoute(file, baseDir);
    if (!route) continue;
    const stats = await fsp.stat(file);
    routes.push({
      loc: combineUrl(baseUrl, route),
      changefreq: route.includes('/blog') ? 'daily' : inferChangefreq(route),
      priority: inferPriority(route),
      lastmod: isoDateFromFile(stats),
      hint: `file:${path.relative(process.cwd(), file)}`
    });
  }
  return routes;
}

function combineUrl(base, route) {
  try {
    const url = new URL(route, `${base}/`);
    return url.toString().replace(/\/+$/, route === '/' ? '/' : '');
  } catch (error) {
    throw new Error(`Failed to construct URL for route "${route}": ${error.message}`);
  }
}

const ASSET_EXTENSION_PATTERN = /\.(?:png|jpe?g|gif|svg|webp|ico|css|js|mjs|json|pdf|zip|woff2?|ttf|map|xml|txt)$/i;

function extractLinks(html, base) {
  const links = new Set();
  const hrefPattern = /href\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = hrefPattern.exec(html))) {
    const value = match[1];
    if (!value || value.startsWith('#') || value.startsWith('mailto:') || value.startsWith('tel:')) {
      continue;
    }
    try {
      const url = new URL(value, base);
      if (url.origin !== base.origin) continue;
      url.hash = '';
      url.search = '';
      if (ASSET_EXTENSION_PATTERN.test(url.pathname)) continue;
      links.add(url.toString().replace(/\/+$/, url.pathname === '/' ? '/' : ''));
    } catch {
      continue;
    }
  }
  return Array.from(links);
}

async function crawlSite(baseDomain, maxPages = DEFAULT_MAX_PAGES, userAgent = 'sitemap-generator-bot/1.0') {
  const originUrl = new URL(baseDomain);
  const queue = [originUrl.toString()];
  const seen = new Set();
  const discovered = new Map();

  while (queue.length > 0 && discovered.size < maxPages) {
    const current = queue.shift();
    if (seen.has(current)) continue;
    seen.add(current);

    try {
      const response = await fetch(current, {
        headers: { 'User-Agent': userAgent, Accept: 'text/html,application/xhtml+xml' }
      });
      if (!response.ok) {
        console.warn(`Skipping ${current}: HTTP ${response.status}`);
        continue;
      }
      const contentType = response.headers.get('content-type') || '';
      const buffer = await response.text();
      discovered.set(current, response.headers.get('last-modified'));
      if (contentType.includes('text/html')) {
        const links = extractLinks(buffer, originUrl);
        for (const link of links) {
          if (!seen.has(link) && !queue.includes(link) && discovered.size + queue.length < maxPages) {
            queue.push(link);
          }
        }
      }
    } catch (error) {
      console.warn(`Failed to fetch ${current}: ${error.message}`);
    }
  }

  const records = [];
  for (const [url, lastModified] of discovered.entries()) {
    const route = new URL(url).pathname || '/';
    let lastmodDate = new Date(lastModified || Date.now());
    if (Number.isNaN(lastmodDate.getTime())) {
      lastmodDate = new Date();
    }
    records.push({
      loc: url,
      changefreq: inferChangefreq(route),
      priority: inferPriority(route),
      lastmod: lastmodDate.toISOString(),
      hint: 'crawl'
    });
  }
  return records;
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildSitemapXml(urls) {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const entry of urls) {
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(entry.loc)}</loc>`);
    lines.push(`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`);
    lines.push(`    <changefreq>${escapeXml(entry.changefreq)}</changefreq>`);
    lines.push(`    <priority>${escapeXml(entry.priority)}</priority>`);
    lines.push('  </url>');
  }
  lines.push('</urlset>');
  return lines.join('\n');
}

function validateXmlStructure(xml) {
  const tagPattern = /<\/?([A-Za-z0-9:_-]+)(\s[^>]*)?>/g;
  const stack = [];
  let match;
  while ((match = tagPattern.exec(xml))) {
    const [tag, name] = match;
    if (tag.endsWith('/>')) {
      continue;
    }
    if (tag.startsWith('</')) {
      if (stack.length === 0 || stack.pop() !== name) {
        throw new Error(`XML validation failed: mismatched closing tag </${name}>.`);
      }
    } else {
      stack.push(name);
    }
  }
  if (stack.length !== 0) {
    throw new Error(`XML validation failed: unclosed tag <${stack.pop()}>.`);
  }
  if (!xml.includes('<urlset') || !xml.includes('</urlset>')) {
    throw new Error('XML validation failed: missing required <urlset> element.');
  }
}

function dedupeUrls(records) {
  const seen = new Map();
  for (const record of records) {
    if (!record.loc) continue;
    const existing = seen.get(record.loc);
    if (!existing) {
      seen.set(record.loc, record);
      continue;
    }
    const currentPriority = parseFloat(record.priority);
    const previousPriority = parseFloat(existing.priority);
    if (currentPriority > previousPriority) {
      seen.set(record.loc, record);
      continue;
    }
    const currentDate = new Date(record.lastmod);
    const previousDate = new Date(existing.lastmod);
    if (currentDate > previousDate) {
      seen.set(record.loc, record);
    }
  }
  return Array.from(seen.values()).sort((a, b) => a.loc.localeCompare(b.loc));
}

async function main() {
  const args = parseArgs(process.argv);
  if (typeof fetch !== 'function') {
    throw new Error('Global fetch API not available. Run the script with Node.js 18 or newer.');
  }
  const baseDomain = normalizeBaseDomain(args.domain || DEFAULT_BASE_DOMAIN);
  const outputPath = resolveOutputPath(args.out);
  const scanDir = args.scanDir
    ? path.isAbsolute(args.scanDir)
      ? args.scanDir
      : path.resolve(process.cwd(), args.scanDir)
    : DEFAULT_SCAN_DIR;
  const crawlSiteFlag = args.crawl === undefined ? true : args.crawl !== 'false';
  const maxPages = args.maxPages ? Number(args.maxPages) : DEFAULT_MAX_PAGES;

  const collections = [];

  if (fs.existsSync(scanDir)) {
    const dirRoutes = await gatherRoutesFromDir(scanDir, baseDomain);
    if (dirRoutes.length) {
      console.log(`Collected ${dirRoutes.length} URLs from ${path.relative(process.cwd(), scanDir)}.`);
    } else {
      console.warn(`No eligible files found in ${path.relative(process.cwd(), scanDir)}.`);
    }
    collections.push(...dirRoutes);
  } else {
    console.warn(`Directory not found: ${path.relative(process.cwd(), scanDir)}. Skipping file scan.`);
  }

  if (crawlSiteFlag) {
    console.log(`Crawling up to ${maxPages} pages from ${baseDomain} ...`);
    const crawled = await crawlSite(baseDomain, maxPages);
    if (!crawled.length) {
      console.warn('No pages discovered during crawl.');
    } else {
      console.log(`Crawler discovered ${crawled.length} URLs.`);
      collections.push(...crawled);
    }
  }

  if (!collections.length) {
    throw new Error('No URLs collected. Ensure the scan directory exists or enable crawling.');
  }

  const uniqueUrls = dedupeUrls(collections);
  const xml = buildSitemapXml(uniqueUrls);
  validateXmlStructure(xml);
  await fsp.writeFile(outputPath, xml, 'utf8');

  console.log(`Sitemap created at ${path.relative(process.cwd(), outputPath)} with ${uniqueUrls.length} URLs.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
