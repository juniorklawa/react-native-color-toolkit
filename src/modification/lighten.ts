import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';
import getNewPercentage from '../utilities/getRelativePercentage';

/**
 * @param  {String} color A 6 character hex color.
 * @param  {Number} amount The amount to brighten the color.
 * @return {String} The lighter color.
 */
const lighten = (color: string, amount = 0.1) => {
  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = rgbToHsl(r, g, b);

  const newLuminosity = getNewPercentage(amount, l, 'lighten');
  const newColor = hslToHex(h, s, newLuminosity);
  return newColor;
};

export default lighten;
