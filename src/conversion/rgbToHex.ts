/**
 * Convert an RGB color to a hexadecimal color.
 * @param  {Number} r The red value of the color.
 * @param  {Number} g The green value of the color.
 * @param  {Number} b The blue value of the color.
 * @return {String} The hexadecimal color.
 */
const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export default rgbToHex;
