import { theme } from 'constants/theme';

export const getColor = (
  isSelectedDay: string,
  isToday: string,
  isHoliday: string,
  isWeekend: string,
  isCurrentMonth: string
): string => {
  switch (true) {
    case isSelectedDay === 'true':
      return theme.colorIsSelected;
    case isToday === 'true':
      return theme.colorToday;
    case isHoliday === 'true':
      return theme.colorHoliday;
    case isWeekend === 'true':
      return theme.colorWeekend;
    case isCurrentMonth === 'true':
      return theme.colorCurrentMonth;
    default:
      return theme.colorOtherMonth;
  }
};
