import getNewPercentage from '../utilities/getRelativePercentage';
import hexToRgb from '../conversion/hexToRgb';
import hslToHex from '../conversion/hslToHex';
import rgbToHsl from '../conversion/rgbToHsl';

export const desaturate = (color: string, amount = 0.1) => {
  const {r, g, b} = hexToRgb(color);
  let {h, s, l} = rgbToHsl(r, g, b);
  const newSaturation = getNewPercentage(amount, s, 'darken');
  const newColor = hslToHex(h, newSaturation, l);
  return newColor;
};
