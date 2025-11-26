export function generateColors(count: number) {
  const minHue = 180; // turquoise
  const maxHue = 260; // bleu foncé

  return Array.from({ length: count }).map((_, i) => {
    const hue = minHue + ((maxHue - minHue) * i) / Math.max(count - 1, 1);

    return {
      bg: `hsl(${hue}, 65%, 60%)`,
      border: `hsl(${hue}, 75%, 40%)`,
    };
  });
}
