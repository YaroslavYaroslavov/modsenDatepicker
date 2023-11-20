const partsDay = 0;
const partsMonth = 1;
const partsYear = 2;
const monthOffset = 1;

export const parseDate = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.target.value;
  const parts = inputValue.split('.');
  const day = parseInt(parts[partsDay], 10);
  const month = parseInt(parts[partsMonth], 10) - monthOffset;
  const year = parseInt(parts[partsYear], 10);
  const date = new Date(year, month, day);
  return {
    day,
    month,
    year,
    date,
    inputValue,
  };
};
