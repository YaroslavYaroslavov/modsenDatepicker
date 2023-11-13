import { CalendarView } from 'constants/types';

export type StyledComponentProps = {
  isclearbuttonvisible: string;
};
export interface CalendarAllProps {
  startOnMonday?: boolean;
  selectedDay?: Date;
  handleSelectDay?: (date: Date) => void;
  maxCalendarYear?: number;
  minCalendarYear?: number;
  defaultMonth?: number;
  defaultYear?: number;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
  withTodos?: boolean;
  defaultCalendarView?: CalendarView;
  isInputHaveValue?: boolean;
  holidayColor?: string;
}
