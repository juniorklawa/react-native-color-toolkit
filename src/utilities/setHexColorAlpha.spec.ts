import setHexColorAlpha from './setHexColorAlpha';

describe('setHexColorAlpha function', () => {
  it('should return a hex color with a a given alpha', () => {
    const value = setHexColorAlpha('#2196F3', 0.5);

    expect(value).toEqual('#2196F380');
  });
});
