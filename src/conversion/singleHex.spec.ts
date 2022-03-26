import singleHex from './singleHex';

describe('singleHex function', () => {
  it('should return a string with correct hex value', () => {
    const singleHexColor = singleHex(42);

    expect(singleHexColor).toEqual('29d6');
  });
});
