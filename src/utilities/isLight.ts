import isDark from './isDark';

/**
 * @param  {String} color A 6 character hex color.
 * @return {Boolean} True if the color is light, false otherwise.
 */
const isLight = (color: string): boolean => {
  return !isDark(color);
};

export default isLight;
