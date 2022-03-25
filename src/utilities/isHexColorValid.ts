const isHexColorValid = (color: string): boolean => {
  if (color.length !== 6) {
    return false;
  }

  const regex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  return regex.test(color);
};

export default isHexColorValid;
