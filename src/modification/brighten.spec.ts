import brighten from './brighten';

describe('brighten function', () => {
  it('should return a brighten color given a percentage', () => {
    const brightenColor = brighten('#2196F3', 0.5);

    expect(brightenColor).toEqual('#31e1ff');
  });
});
