/**
 * Convert an RGB color to a singl hexadecimal color.
 * @param  {Number} x The value of that color
 * @return {String} The single hexadecimal color (r or g or b).
 */
const singleHex = (x: number) => {
  const hex = Math.round(x * 255).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export default singleHex;
