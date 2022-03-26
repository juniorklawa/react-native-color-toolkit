import hslToHex from './hslToHex';

describe('hslToHex function', () => {
  it('should return a string with the correct hex color value', () => {
    const hexColor = hslToHex(206, 89, 54);

    expect(hexColor).toEqual('#2198f2');
  });
});
