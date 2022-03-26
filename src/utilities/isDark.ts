import getBrightness from './getBrightness';

/**
 * @param  {String} color A 6 character hex color.
 * @return {Boolean} True if the color is dark, false otherwise.
 */
const isDark = (color: string): boolean => {
  return getBrightness(color) < 40;
};

export default isDark;
