import { desaturate } from '..';

/**
 * @param  {String} color A 6 character hex color.
 * @return {String} The greyscaled color.
 */
const greyscale = (color: string) => {
  return desaturate(color, 1);
};

export default greyscale;
