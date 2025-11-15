export function cn(
  ...inputs: Array<
    string | number | false | null | undefined | Record<string, boolean> | Array<any>
  >
): string {
  const classes: string[] = [];

  const push = (value: any): void => {
    if (!value) return;

    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(push);
      return;
    }

    if (typeof value === "object") {
      Object.entries(value).forEach(([key, condition]) => {
        if (condition) {
          classes.push(key);
        }
      });
    }
  };

  inputs.forEach(push);
  return classes.join(" ");
}
