import { CalendarView } from 'constants/types';

export interface ControlPanelFullMonthProps {
  month: number;
  year: number;
  minCalendarYear: number;
  maxCalendarYear: number;
  handleChangeMonth: (isSetNextButton: boolean) => () => void;
  setCalendarView: (view: CalendarView) => void;
}
