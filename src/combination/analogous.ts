import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';

export const analogous = (color: string) => {
  const {r, g, b} = hexToRgb(color);
  const {h, s, l} = rgbToHsl(r, g, b);

  const primaryColor = hslToHex((h + 30) % 360, s, l);
  const secondaryColor = hslToHex((h + 330) % 360, s, l);
  return [color, primaryColor, secondaryColor];
};
