/**
 * @param  {String} color A hex color.
 * @param  {Number} alpha The alpha percentage.
 * @return {String} The hex color with the given alpha value.
 */
const setHexColorAlpha = (color: string, alpha: number): string => {
  const opacity = Math.round(Math.min(Math.max(alpha || 1, 0), 1) * 255);
  return color + opacity.toString(16).toUpperCase();
};

export default setHexColorAlpha;
