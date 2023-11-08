export interface WeekBodyProps {
  startOnMonday: boolean;
  month: number;
  toggleTodoList: () => void;
  year: number;
  selectedDay?: Date;
  handleSelectDay: ((date: Date) => void) | undefined;
  weekCounter: number;
  setIsLastWeek: (isLastWeek: boolean) => void;
  setIsFirstWeek: (isFirstDay: boolean) => void;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}
