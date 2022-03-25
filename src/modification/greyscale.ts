import { desaturate } from "..";

const greyscale = (color: string) => {
  return desaturate(color, 1);
};

export default greyscale;
