import rgbToHsl from './rgbToHsl';

describe('rgbToHsl function', () => {
  it('should return an object with correct hsl values', () => {
    const hslColor = rgbToHsl(33, 150, 242);

    expect(hslColor).toEqual({
      h: 206.41148325358853,
      s: 88.93617021276596,
      l: 53.92156862745098,
    });
  });
});
