import hexToPercentageRgb from '../conversion/hexToPercentageRgb';

/**
 * @param  {String} color A 6 character hex color.
 * @return {Number} The brightness of the color.
 */
const getBrightness = (color: string): number => {
  const rgb = hexToPercentageRgb(color);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness;
};

export default getBrightness;
