export const formatNumber = (num, decimals) => {
  if (typeof num !== 'number' || typeof decimals !== 'number') {
    return num;
  }
  return num.toFixed(decimals);
};
