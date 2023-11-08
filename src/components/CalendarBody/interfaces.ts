import { CalendarView } from 'constants/types';

export interface CalendarBodyProps {
  startOnMonday: boolean;
  withTodos: boolean;
  month: number;
  year: number;
  selectedDay?: Date;
  calendarView?: CalendarView;
  handleSelectDay?: (date: Date) => void;
  weekCounter: number;
  setIsLastWeek: (isLastWeek: boolean) => void;
  setIsFirstWeek: (isFirstWeek: boolean) => void;
  handleSelectMonth: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleSelectYear: (e: React.MouseEvent<HTMLElement>) => void;
  currentDecadeYears: number[];
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}
