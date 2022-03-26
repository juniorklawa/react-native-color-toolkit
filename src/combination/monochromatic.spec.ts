import monochromatic from './monochromatic';

describe('monochromatic function', () => {
  it('should return an array of monochromatic colors, given a color', () => {
    const colors = monochromatic('#2196F3');

    expect(colors).toEqual([
      '#2196f3',
      '#0c7fda',
      '#0965af',
      '#074c83',
      '#053357',
      '#02192c',
    ]);
  });
});
