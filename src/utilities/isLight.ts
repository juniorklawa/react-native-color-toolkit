import isDark from "./isDark";

const isLight = (color: string): boolean => {
  return !isDark(color);
};

export default isLight;
