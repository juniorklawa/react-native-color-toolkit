import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';

/**
 * @param  {String} color A 6 character hex color.
 * @return {String} Returns the complement of a color.
 */
const complement = (color: string) => {
  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = rgbToHsl(r, g, b);
  const newHue = (h + 180) % 360;
  const newColor = hslToHex(newHue, s, l);
  return newColor;
};

export default complement;
