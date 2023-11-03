import { Calendar } from 'components/Calendar';
import { CalendarAllProps } from 'components/Calendar';
import { withInput } from 'components/HOCs/withInput';
import { withInputs } from 'components/HOCs/withInputs';
import React, { FC } from 'react';
class CalendarService {
  static getDefaultCalendar() {
    return Calendar;
  }
  static withInput() {
    return withInput(Calendar);
  }
  static withInputs() {
    return withInputs(Calendar);
  }
  static withTodos(Component: FC<CalendarAllProps>) {
    return (props: FC<CalendarAllProps>) => {
      <Component {...props} withTodos={true} />;
    };
  }
}

export default CalendarService;
