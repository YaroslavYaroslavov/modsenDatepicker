export interface FullMonthBodyProps {
  toggleTodoList: () => void;
  startOnMonday: boolean;
  month: number;
  year: number;
  selectedDay?: Date;
  handleSelectDay?: (date: Date) => void;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}
