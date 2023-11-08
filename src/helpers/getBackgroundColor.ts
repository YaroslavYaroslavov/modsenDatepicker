import { theme } from 'constants/theme';

export const getBackgroundColor = (
  isFirstDay: string,
  isSecondDay: string,
  isBetweenSelectedDays: string,
  isSelectedDay: string
): string => {
  switch (true) {
    case isFirstDay === 'true':
      return theme.backgroundColorFirstSelected;
    case isSecondDay === 'true':
      return theme.backgroundColorSecondSelected;
    case isBetweenSelectedDays === 'true':
      return theme.backgroundColorBetweenSelected;
    case isSelectedDay === 'true':
      return theme.backgroundColorSelected;
    default:
      return 'transparent';
  }
};
