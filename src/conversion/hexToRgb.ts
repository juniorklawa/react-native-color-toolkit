/**
 * @param  {String} color A 6 character hex color.
 * @return {Object} An object with the following properties:
 * - r: The red value of the color.
 * - g: The green value of the color.
 * - b: The blue value of the color.
 */
const hexToRgb = (color: string) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return {
    r,
    g,
    b,
  };
};

export default hexToRgb;
