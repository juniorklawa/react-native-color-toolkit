import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';
import getNewPercentage from '../utilities/getRelativePercentage';

/**
 * @param  {String} color A 6 character hex color.
 * @param  {Number} amount The amount to brighten the color.
 * @return {String} The desaturated color.
 */
const desaturate = (color: string, amount = 0.1) => {
  const { r, g, b } = hexToRgb(color);
  let { h, s, l } = rgbToHsl(r, g, b);
  const newSaturation = getNewPercentage(amount, s, 'darken');
  const newColor = hslToHex(h, newSaturation, l);
  return newColor;
};

export default desaturate;
