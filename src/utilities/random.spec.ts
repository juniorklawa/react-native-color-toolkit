import isHexColorValid from './isHexColorValid';
import random from './random';

describe('random function', () => {
  it('should return a valid hex color', () => {
    const randomColor = random();
    const value = isHexColorValid(randomColor);

    expect(value).toEqual(true);
  });
});
