import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';

/**
 * @param  {String} color A 6 character hex color.
 * @return {Array} An array of colors that are triad to the given color.
 */
const triad = (color: string) => {
  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = rgbToHsl(r, g, b);

  const secondaryColor = hslToHex((h + 120) % 360, s, l);
  const terciaryColor = hslToHex((h + 240) % 360, s, l);
  return [color, secondaryColor, terciaryColor];
};

export default triad;
