import React, { FC, memo } from 'react';

import { CalendarWeekPanelProps } from './interfaces';
import { WeekPanelCell, WeekPanelContainer } from './styled';

export const CalendarWeekPanel: FC<CalendarWeekPanelProps> = memo(
  ({ startOnMonday = true, calendarView }) => {
    CalendarWeekPanel.displayName = 'CalendarWeekPanel';

    const week = startOnMonday
      ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
      : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return calendarView === 'months' || calendarView === 'years' ? null : (
      <WeekPanelContainer>
        {week.map((day) => (
          <WeekPanelCell key={day}>{day}</WeekPanelCell>
        ))}
      </WeekPanelContainer>
    );
  }
);
