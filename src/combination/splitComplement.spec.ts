import splitComplementary from './splitComplement';

describe('splitComplement function', () => {
  it('should return an array of split complmenets colors, given a color', () => {
    const colors = splitComplementary('#2196F3');

    expect(colors).toEqual(['#2196F3', '#f3212d', '#f3e321']);
  });
});
