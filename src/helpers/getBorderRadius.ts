export const getBorderRadius = (
  isFirstDay: string,
  isSecondDay: string,
  isBetweenSelectedDays: string
): string => {
  switch (true) {
    case isFirstDay === 'true':
      return '10px 0 0 10px';
    case isSecondDay === 'true':
      return '0 10px 10px 0';
    case isBetweenSelectedDays === 'true':
      return '0px';
    default:
      return '10px';
  }
};
