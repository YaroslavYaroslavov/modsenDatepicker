export interface ControlPanelYearsProps {
  currentDecadeYears: number[];
  minCalendarYear: number;
  maxCalendarYear: number;
  handleChangeDecade: (isSetNextButton: boolean) => () => void;
}
