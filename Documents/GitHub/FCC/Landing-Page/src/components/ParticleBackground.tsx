import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type ParticleData = {
  velocities: Float32Array;
  count: number;
  bounds: number;
};

const ParticleBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const particleDataRef = useRef<ParticleData | null>(null);

  useEffect(() => {
    const container = mountRef.current;

    if (!container || typeof window === "undefined") {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width > 0 && height > 0 ? width / height : window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    container.appendChild(renderer.domElement);

    const isMobile = width < 768;
    const isTablet = width < 1024;
    const particleCount = isMobile ? 400 : isTablet ? 800 : 1200;
    const bounds = isMobile ? 15 : 20;
    const speed = isMobile ? 0.01 : 0.02;

    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * bounds;
      positions[idx + 1] = (Math.random() - 0.5) * bounds;
      positions[idx + 2] = (Math.random() - 0.5) * bounds;

      velocities[idx] = (Math.random() - 0.5) * speed;
      velocities[idx + 1] = (Math.random() - 0.5) * speed;
      velocities[idx + 2] = (Math.random() - 0.5) * speed;
    }

    particleDataRef.current = {
      velocities,
      count: particleCount,
      bounds
    };

    const geometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(positions, 3);
    positionAttribute.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", positionAttribute);

    const material = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: isMobile ? 1.2 : 2,
      transparent: true,
      opacity: isMobile ? 0.4 : 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    camera.position.z = 10;

    const animate = () => {
      const particleData = particleDataRef.current;
      const particlesInstance = particlesRef.current;

      if (!particleData || !particlesInstance) {
        return;
      }

      const { velocities: vel, count, bounds: particleBounds } = particleData;
      const positionAttr = particlesInstance.geometry.getAttribute("position") as THREE.BufferAttribute;
      const posArray = positionAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const idx = i * 3;

        posArray[idx] += vel[idx];
        posArray[idx + 1] += vel[idx + 1];
        posArray[idx + 2] += vel[idx + 2];

        if (Math.abs(posArray[idx]) > particleBounds) {
          vel[idx] *= -1;
          posArray[idx] = Math.sign(posArray[idx]) * particleBounds;
        }
        if (Math.abs(posArray[idx + 1]) > particleBounds) {
          vel[idx + 1] *= -1;
          posArray[idx + 1] = Math.sign(posArray[idx + 1]) * particleBounds;
        }
        if (Math.abs(posArray[idx + 2]) > particleBounds) {
          vel[idx + 2] *= -1;
          posArray[idx + 2] = Math.sign(posArray[idx + 2]) * particleBounds;
        }
      }

      positionAttr.needsUpdate = true;
      particlesInstance.rotation.y += 0.001;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    renderer.render(scene, camera);
    frameRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!mountRef.current) {
        return;
      }

      const newWidth = mountRef.current.clientWidth || window.innerWidth;
      const newHeight = mountRef.current.clientHeight || window.innerHeight;
      const aspect = newWidth > 0 && newHeight > 0 ? newWidth / newHeight : 1;

      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      window.removeEventListener("resize", handleResize);

      particleDataRef.current = null;
      particlesRef.current = null;

      if (mountRef.current && renderer.domElement.parentElement === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(51, 65, 85, 0.4) 100%)"
      }}
    />
  );
};

export default ParticleBackground;
