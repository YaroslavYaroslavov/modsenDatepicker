import { CalendarProps } from 'constants/types';

export interface DefaultProps extends CalendarProps {
  selectedDay?: Date;
  withTodos?: boolean;
}
