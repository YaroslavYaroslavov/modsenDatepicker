export interface ControlPanelWeekProps {
  month: number;
  year: number;
  handleChangeWeek: (isSetNextButton: boolean) => () => void;
  minCalendarYear: number;
  maxCalendarYear: number;
  isFirstWeek: boolean;
  isLastWeek: boolean;
}
