import hexToRgb from './hexToRgb';

describe('hexToRgb function', () => {
  it('should return an object with r,g,b properties with correct values', () => {
    const rgbColor = hexToRgb('#2196F3');

    expect(rgbColor).toEqual({ r: 33, g: 150, b: 243 });
  });
});
