import desaturate from './desaturate';

describe('desaturate function', () => {
  it('should return a desaturated color given a percentage', () => {
    const desaturateColor = desaturate('#2196F3', 0.5);

    expect(desaturateColor).toEqual('#5590bf');
  });
});
