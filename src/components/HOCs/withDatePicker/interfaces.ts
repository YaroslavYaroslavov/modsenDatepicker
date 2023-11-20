import { CalendarProps } from 'constants/types';

export interface DefaultProps extends CalendarProps {
  defaultSelectedDay?: Date;
  withTodos: boolean;
}
