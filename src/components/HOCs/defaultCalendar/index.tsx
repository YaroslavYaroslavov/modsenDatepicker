import { CalendarAllProps } from 'components/Calendar/interfaces';
import React, { FC } from 'react';

import { DefaultProps } from './interfaces';

export const getDefaultCalendar = (WrappedComponent: FC<CalendarAllProps>) => {
  const getDefaultCalendar = (props: DefaultProps) => <WrappedComponent {...props} />;
  return getDefaultCalendar;
};
