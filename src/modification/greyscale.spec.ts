import greyscale from './greyscale';

describe('greyscale function', () => {
  it('should return a greyscaled color', () => {
    const greyscaleColor = greyscale('#2196F3');

    expect(greyscaleColor).toEqual('#8a8a8a');
  });
});
