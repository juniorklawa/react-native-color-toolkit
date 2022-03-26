import tetrad from './tetrad';

describe('tetrad function', () => {
  it('should return an array of tetrad colors, given a color', () => {
    const colors = tetrad('#2196F3');

    expect(colors).toEqual(['#2196F3', '#e721f3', '#f37e21', '#2df321']);
  });
});
