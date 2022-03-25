import hexToRgb from "../conversion/hexToRgb";
import hslToHex from "../conversion/hslToHex";
import rgbToHsl from "../conversion/rgbToHsl";
import getNewPercentage from "../utilities/getRelativePercentage";

const monochromatic = (color: string) => {
  const pieces = 6;
  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = rgbToHsl(r, g, b);

  const newHsl = { h, s, l };
  const colorsArr = [];
  for (let i = 0; i < pieces; i++) {
    newHsl.l = getNewPercentage((1 / pieces) * i, l, "darken");
    colorsArr.push(hslToHex(newHsl.h, newHsl.s, newHsl.l));
  }
  return colorsArr;
};

export default monochromatic;
