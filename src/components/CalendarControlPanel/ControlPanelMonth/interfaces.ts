import { CalendarView } from 'constants/types';

export interface ControlPanelMonthProps {
  year: number;
  setCalendarView: (view: CalendarView) => void;
  minCalendarYear: number;
  maxCalendarYear: number;
  handleChangeYear: (isSetNextButton: boolean) => () => void;
}
