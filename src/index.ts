import Colors from './colors';
import analogous from './combination/analogous';
import complement from './combination/complement';
import monochromatic from './combination/monochromatic';
import splitComplementary from './combination/splitComplement';
import tetrad from './combination/tetrad';
import triad from './combination/triad';
import hexToPercentageRgb from './conversion/hexToPercentageRgb';
import hexToRgb from './conversion/hexToRgb';
import hslToHex from './conversion/hslToHex';
import hueToRgb from './conversion/hueToRgb';
import rgbToHex from './conversion/rgbToHex';
import rgbToHsl from './conversion/rgbToHsl';
import singleHex from './conversion/singleHex';
import brighten from './modification/brighten';
import darken from './modification/darken';
import desaturate from './modification/desaturate';
import greyscale from './modification/greyscale';
import lighten from './modification/lighten';
import saturate from './modification/saturate';
import getBrightness from './utilities/getBrightness';
import getHexColorAlpha from './utilities/getHexColorAlpha';
import isDark from './utilities/isDark';
import isHexColorValid from './utilities/isHexColorValid';
import isLight from './utilities/isLight';
import random from './utilities/random';
import setHexColorAlpha from './utilities/setHexColorAlpha';

export {
  analogous,
  complement,
  monochromatic,
  splitComplementary,
  tetrad,
  triad,
  // Conversion functions
  hexToPercentageRgb,
  hexToRgb,
  hslToHex,
  hueToRgb,
  rgbToHex,
  rgbToHsl,
  singleHex,
  // Modification functions
  brighten,
  darken,
  desaturate,
  greyscale,
  lighten,
  saturate,
  // Utility functions
  getBrightness,
  getHexColorAlpha,
  isDark,
  isHexColorValid,
  isLight,
  random,
  setHexColorAlpha,
  // Colors
  Colors,
};
