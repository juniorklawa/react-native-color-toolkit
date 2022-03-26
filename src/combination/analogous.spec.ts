import analogous from './analogous';

describe('analogous function', () => {
  it('should return an array of analogous colors, given a color', () => {
    const colors = analogous('#2196F3');

    expect(colors).toEqual(['#2196F3', '#212df3', '#21f3e7']);
  });
});
