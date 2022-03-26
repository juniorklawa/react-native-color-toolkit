import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';
import getNewPercentage from '../utilities/getRelativePercentage';

/**
 * @param  {String} color A 6 character hex color.
 * @param  {Number} amount The amount to brighten the color.
 * @return {String} The darken color.
 */
const darken = (color: string, amount = 0.1) => {
  const rgbColor = hexToRgb(color);
  const hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b);

  hslColor.l = getNewPercentage(amount, hslColor.l, 'darken');
  const newColor = hslToHex(hslColor.h, hslColor.s, hslColor.l);
  return newColor;
};

export default darken;
