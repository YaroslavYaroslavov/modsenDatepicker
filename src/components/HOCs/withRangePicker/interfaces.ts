import { CalendarProps } from 'constants/types';

export interface DefaultProps extends CalendarProps {
  defaultSelectedFirstDay?: Date;
  defaultSelectedSecondDay?: Date;
}
