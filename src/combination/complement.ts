import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';

export const complement = (color: string) => {
  const {r, g, b} = hexToRgb(color);
  const {h, s, l} = rgbToHsl(r, g, b);
  const newHue = (h + 180) % 360;
  const newColor = hslToHex(newHue, s, l);
  return newColor;
};
