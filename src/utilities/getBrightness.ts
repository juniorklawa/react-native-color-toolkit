import hexToPercentageRgb from "../conversion/hexToPercentageRgb";


/**
 * @param  {String} color A 6 character hex color.
 * @return {Number} The brightness of the color.
 */
const getBrightness = (color: string): number => {
  const { r, g, b } = hexToPercentageRgb(color);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness;
};

export default getBrightness;
