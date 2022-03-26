import rgbToHex from './rgbToHex';

describe('rgbToHex function', () => {
  it('should return a string with correct hex value', () => {
    const hexColor = rgbToHex(33, 150, 242);

    expect(hexColor).toEqual('#2196f2');
  });
});
