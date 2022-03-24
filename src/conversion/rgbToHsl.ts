const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const h =
    max === min
      ? 0
      : max === r
      ? (g - b) / (max - min)
      : max === g
      ? 2 + (b - r) / (max - min)
      : 4 + (r - g) / (max - min);
  const l = (max + min) / 2;
  const s =
    max === min
      ? 0
      : l < 0.5
      ? (max - min) / (2 * l)
      : (max - min) / (2 - 2 * l);

  return {h: h * 60, s: s * 100, l: l * 100};
};

export default rgbToHsl;
