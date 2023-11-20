import { CalendarView } from 'constants/types';

export interface CalendarControlPanelProps {
  month: number;
  year: number;
  handleChangeDecade: (isSetNextButton: boolean) => () => void;
  handleChangeMonth: (isSetNextButton: boolean) => () => void;
  handleChangeWeek: (isSetNextButton: boolean) => () => void;
  handleChangeYear: (isSetNextButton: boolean) => () => void;
  currentDecadeYears: number[];
  setCalendarView: (view: CalendarView) => void;
  minCalendarYear: number;
  maxCalendarYear: number;
  isLastWeek: boolean;
  isFirstWeek: boolean;
  calendarView?: CalendarView;
}
