import { CalendarProps } from 'constants/types';

export interface DefaultProps extends CalendarProps {
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}
