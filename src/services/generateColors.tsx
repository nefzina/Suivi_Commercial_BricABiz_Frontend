export function generateColors(count: number) {
    return Array.from({ length: count }).map((_, i) => {
      const hue = (i * (360 / count)) % 360;
      return {
        bg: `hsl(${hue}, 70%, 70%)`,
        border: `hsl(${hue}, 70%, 40%)`,
      };
    });
  }