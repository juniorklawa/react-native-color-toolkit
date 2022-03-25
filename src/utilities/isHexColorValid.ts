/**
 * @param  {String} color A 6 character hex color.
 * @return {Boolean} True if the color is valid, false otherwise.
 */
const isHexColorValid = (color: string): boolean => {
  if (color.length !== 6) {
    return false;
  }

  const regex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  return regex.test(color);
};

export default isHexColorValid;
