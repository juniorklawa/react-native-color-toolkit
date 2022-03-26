const getNewPercentage = (
  amount: number,
  relativeTo: number,
  type: 'lighten' | 'darken'
) => {
  const newPercentage = amount * relativeTo;
  return type === 'lighten'
    ? newPercentage + relativeTo
    : relativeTo - newPercentage;
};

export default getNewPercentage;
