import isHexColorValid from './isHexColorValid';

describe('isHexColorValid function', () => {
  it('should return true if a hex color is valid', () => {
    const value = isHexColorValid('#2196F3');

    expect(value).toEqual(true);
  });

  it('should return false if a hex color is invalid', () => {
    const value = isHexColorValid('foobar');

    expect(value).toEqual(false);
  });
});
