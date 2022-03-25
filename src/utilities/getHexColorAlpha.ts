const getHexColorAlpha = (hex: string): number => {
  const alpha = parseInt(hex.substring(hex.length - 2), 16);
  return alpha;
};

export default getHexColorAlpha;
