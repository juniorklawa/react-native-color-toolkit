import getBrightness from "./getBrightness";

const isDark = (color: string): boolean => {
  return getBrightness(color) < 128;
};

export default isDark;
