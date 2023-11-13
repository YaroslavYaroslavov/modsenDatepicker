import { CalendarView } from 'constants/types';

export interface DefaultProps {
  defaultMonth: number;
  defaultYear: number;
  startOnMonday: boolean;
  selectedDay: Date;
  maxCalendarYear: number;
  minCalendarYear: number;
  defaultCalendarView: CalendarView;
  selectedFirstDay: Date;
  selectedSecondDay: Date;
  holidayColor: string;
}
