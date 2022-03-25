const hexToPercentageRgb = (color: string) => {
  const r = (parseInt(color.slice(1, 3), 16) / 255) * 100;
  const g = (parseInt(color.slice(3, 5), 16) / 255) * 100;
  const b = (parseInt(color.slice(5, 7), 16) / 255) * 100;

  return {
    r,
    g,
    b,
  };
};
export default hexToPercentageRgb;
