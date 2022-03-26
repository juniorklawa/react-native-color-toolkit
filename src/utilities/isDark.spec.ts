import isDark from './isDark';

describe('isDark function', () => {
  it('should return true if a given color is dark', () => {
    const value = isDark('#424242');

    expect(value).toEqual(true);
  });

  it('should return false if a given color is not dark', () => {
    const value = isDark('#29B6F6');

    expect(value).toEqual(false);
  });
});
