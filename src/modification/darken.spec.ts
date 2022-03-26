import darken from './darken';

describe('darken function', () => {
  it('should return a darker color given a percentage', () => {
    const darkenColor = darken('#2196F3', 0.5);

    expect(darkenColor).toEqual('#074c83');
  });
});
