import getNewPercentage from './getRelativePercentage';

describe('getNewPercentage function', () => {
  it('should return the correct value when in lighten mode', () => {
    const value = getNewPercentage(0.2, 50, 'lighten');

    expect(value).toEqual(60);
  });
  it('should return the correct value when in darken mode', () => {
    const value = getNewPercentage(0.2, 50, 'darken');

    expect(value).toEqual(40);
  });
});
