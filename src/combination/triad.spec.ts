import triad from './triad';

describe('triad function', () => {
  it('should return an array of triad colors, given a color', () => {
    const colors = triad('#2196F3');

    expect(colors).toEqual(['#2196F3', '#f32196', '#96f321']);
  });
});
