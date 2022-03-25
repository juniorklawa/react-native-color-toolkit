import hexToRgb from "../conversion/hexToRgb";
import { rgbToHex } from "../conversion/rgbToHex";

const brighten = (color: string, amount = 0.1) => {
  let { r, g, b } = hexToRgb(color);
  r = Math.min(255, r + amount * r);
  g = Math.min(255, g + amount * g);
  b = Math.min(255, b + amount * b);

  return rgbToHex(r, g, b);
};

export default brighten;
