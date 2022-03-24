const toHex = (x: number) => {
  const hex = Math.round(x * 255).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export default toHex;
