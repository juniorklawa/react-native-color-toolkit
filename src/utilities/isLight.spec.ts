import isLight from './isLight';

describe('isLight function', () => {
  it('should return true if a given color is light', () => {
    const value = isLight('#5C6BC0');

    expect(value).toEqual(true);
  });

  it('should return false if a given color is not light', () => {
    const value = isLight('#3E2723');

    expect(value).toEqual(false);
  });
});
