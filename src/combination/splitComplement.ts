import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';

export const splitComplementary = (color: string) => {
  const {r, g, b} = hexToRgb(color);
  const {h, s, l} = rgbToHsl(r, g, b);

  const secondaryColor = hslToHex((h + 150) % 360, s, l);
  const terciaryColor = hslToHex((h + 209) % 360, s, l);

  return [color, secondaryColor, terciaryColor];
};
