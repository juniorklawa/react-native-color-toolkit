import complement from './complement';

describe('complement function', () => {
  it('should return a complement of a given color', () => {
    const complementColor = complement('#2196F3');

    expect(complementColor).toEqual('#f37e21');
  });
});
