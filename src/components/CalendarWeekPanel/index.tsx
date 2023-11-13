import { monthsView, yearsView } from 'constants/calendarViews';
import { startOnMondayArr, startOnSundayArr } from 'constants/weekPlaceholder';
import React, { FC, memo } from 'react';

import { CalendarWeekPanelProps } from './interfaces';
import { WeekPanelCell, WeekPanelContainer } from './styled';

export const CalendarWeekPanel: FC<CalendarWeekPanelProps> = memo(
  ({ startOnMonday = true, calendarView }) => {
    CalendarWeekPanel.displayName = 'CalendarWeekPanel';

    const week = startOnMonday ? startOnMondayArr : startOnSundayArr;

    return calendarView === monthsView || calendarView === yearsView ? null : (
      <WeekPanelContainer>
        {week.map((day) => (
          <WeekPanelCell key={day}>{day}</WeekPanelCell>
        ))}
      </WeekPanelContainer>
    );
  }
);
