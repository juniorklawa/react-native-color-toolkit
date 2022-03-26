import lighten from './lighten';

describe('lighten function', () => {
  it('should return a lightend color given a percentage', () => {
    const lightenColor = lighten('#2196F3', 0.5);

    expect(lightenColor).toEqual('#a4d4fa');
  });
});
