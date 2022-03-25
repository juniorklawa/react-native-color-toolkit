import hexToPercentageRgb from "../conversion/hexToPercentageRgb";

const getBrightness = (color: string): number => {
  const { r, g, b } = hexToPercentageRgb(color);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness;
};

export default getBrightness;
