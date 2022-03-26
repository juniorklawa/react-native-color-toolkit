import getBrightness from './getBrightness';

describe('getBrightness function', () => {
  it('should return the color brightness', () => {
    const value = getBrightness('#2196F3');

    expect(value).toEqual(49.259460000000004);
  });
});
