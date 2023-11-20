import { CalendarView } from 'constants/types';

export interface ButtonProps {
  isSetNextButton: boolean;
  callback: (isSetNextButton: boolean) => () => void;
  panel: CalendarView;
}
export type StyledComponentProps = {
  issetnextbutton: string;
};
