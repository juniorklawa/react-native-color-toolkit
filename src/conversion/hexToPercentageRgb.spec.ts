import hexToPercentageRgb from './hexToPercentageRgb';

describe('hexToPercentageRgb function', () => {
  it('should return an object with r,g,b properties with correct percentage values', () => {
    const rgbColor = hexToPercentageRgb('#2196F3');

    expect(rgbColor).toEqual({ r: 12.94, g: 58.82, b: 95.29 });
  });
});
