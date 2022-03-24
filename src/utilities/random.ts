// get random rgb color
export const random = () => {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + ('000000' + randomHex).slice(-6);
};
