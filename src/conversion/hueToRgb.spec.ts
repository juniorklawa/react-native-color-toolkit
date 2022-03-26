import hueToRgb from './hueToRgb';

describe('hueToRgb function', () => {
  it('should return a correct number value ', () => {
    const rgbColor = hueToRgb(120, 140, 200);

    expect(rgbColor).toEqual(120);
  });
});
