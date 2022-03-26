import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';

/**
 * @param  {String} color A 6 character hex color.
 * @return {Array} An array of colors that are tetrad to the given color.
 */
const tetrad = (color: string) => {
  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = rgbToHsl(r, g, b);
  const newHue = h;

  const secondaryColor = hslToHex((newHue + 90) % 360, s, l);
  const terciaryColor = hslToHex((newHue + 180) % 360, s, l);
  const quaternaryColor = hslToHex((newHue + 270) % 360, s, l);

  return [color, secondaryColor, terciaryColor, quaternaryColor];
};

export default tetrad;
