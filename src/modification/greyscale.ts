import {desaturate} from './desaturate';

export const greyscale = (color: string) => {
  return desaturate(color, 1);
};
