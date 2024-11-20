/**
 *
 * @param value Turns a number into Currency. i.e. 1500 will turn into $1,500
 * @returns
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // Removes decimal places if not needed
  }).format(value);
};
