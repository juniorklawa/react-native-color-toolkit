/**
 * Converts HUE amount to one of RGB colors.
 * @return {Number} A value betwenn 0 and 255.
 */
const hueToRgb = (p: number, q: number, t: number) => {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
};

export default hueToRgb;
