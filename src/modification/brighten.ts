import hexToRgb from '../conversion/hexToRgb';
import rgbToHex from '../conversion/rgbToHex';

/**
 * @param  {String} color A 6 character hex color.
 * @param  {Number} amount The amount to brighten the color.
 * @return {String} The brightened color.
 */
const brighten = (color: string, amount = 0.1) => {
  let { r, g, b } = hexToRgb(color);
  r = Math.min(255, r + amount * r);
  g = Math.min(255, g + amount * g);
  b = Math.min(255, b + amount * b);

  return rgbToHex(r, g, b);
};

export default brighten;
