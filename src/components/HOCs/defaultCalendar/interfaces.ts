import { CalendarView } from 'constants/types';

export interface DefaultProps {
  defaultMonth: number;
  defaultYear: number;
  startOnMonday: boolean;
  defaultSelectedDay: Date;
  maxCalendarYear: number;
  minCalendarYear: number;
  defaultCalendarView: CalendarView;
  defaultSelectedFirstDay: Date;
  defaultSelectedSecondDay: Date;
  holidayColor?: string;
}
