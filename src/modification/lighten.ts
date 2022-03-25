import getNewPercentage from "../utilities/getRelativePercentage";
import hexToRgb from "../conversion/hexToRgb";
import hslToHex from "../conversion/hslToHex";
import rgbToHsl from "../conversion/rgbToHsl";

const lighten = (color: string, amount = 0.1) => {
  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = rgbToHsl(r, g, b);

  const newLuminosity = getNewPercentage(amount, l, "lighten");
  const newColor = hslToHex(h, s, newLuminosity);
  return newColor;
};

export default lighten;
