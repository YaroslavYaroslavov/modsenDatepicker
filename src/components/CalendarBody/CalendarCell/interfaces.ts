export type StyledComponentProps = {
  isselectedday: string;
  istoday: string;
  isholiday: string;
  isweekend: string;
  iscurrentmonth: string;
  isfirstday: string;
  isbetweenselecteddays: string;
  issecondday: string;
};
export interface CalendarCellProps {
  date: Date;
  isCurrentMonth: boolean;
  selectedDay?: Date;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
  handleSelectDay?: (date: Date) => void;
  toggleTodoList: () => void;
}
