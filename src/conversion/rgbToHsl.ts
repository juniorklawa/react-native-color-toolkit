/**
 * Convert an RGB color to a HSL color.
 * @param  {Number} r The red value of the color.
 * @param  {Number} g The green value of the color.
 * @param  {Number} b The blue value of the color.
 * @return {Object} An object with the following properties:
 * - h: The hue value of the color.
 * - s: The saturation value of the color.
 * - l: The lightness value of the color.
 */
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

  return { h: h * 60, s: s * 100, l: l * 100 };
};

export default rgbToHsl;
