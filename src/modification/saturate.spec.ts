import saturate from './saturate';

describe('saturate function', () => {
  it('should return a saturated color given a percentage', () => {
    const saturateColor = saturate('#2196F3', 0.5);

    expect(saturateColor).toEqual('#1597ff');
  });
});
