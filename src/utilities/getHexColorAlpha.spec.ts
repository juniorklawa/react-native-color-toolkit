import getHexColorAlpha from './getHexColorAlpha';

describe('getHexColorAlpha function', () => {
  it('should return a the alpha of a given color', () => {
    const value = getHexColorAlpha('#2196F350');

    expect(value).toEqual(80);
  });
});
