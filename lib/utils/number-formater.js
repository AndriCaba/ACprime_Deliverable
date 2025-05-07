// eslint-disable-next-line default-param-last
export const numberFormater = (value = 0, minimumDecimal, maximumDecimal) => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: minimumDecimal || 0,
    maximumFractionDigits: maximumDecimal || 0,
  });
};
