/**
 * @param  {String} color A string hex color.
 * @return {Number} The alpha of the color.
 */
const getHexColorAlpha = (hex: string): number => {
  const alpha = parseInt(hex.substring(hex.length - 2), 16);
  return alpha;
};

export default getHexColorAlpha;
