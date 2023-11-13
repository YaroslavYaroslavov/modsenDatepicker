import { ControlPanelFullMonth } from 'components/CalendarControlPanel/ControlPanelFullMonth';
import { ControlPanelMonth } from 'components/CalendarControlPanel/ControlPanelMonth';
import { ControlPanelWeek } from 'components/CalendarControlPanel/ControlPanelWeek';
import { ControlPanelYears } from 'components/CalendarControlPanel/ControlPanelYears';
import { monthsView, monthView, weekView, yearsView } from 'constants/calendarViews';
import React, { FC, memo } from 'react';

import { CalendarControlPanelProps } from './interfaces';
import { ControlPanelContainer } from './styled';

export const CalendarControlPanel: FC<CalendarControlPanelProps> = memo((props) => {
  const {
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    handleChangeDecade,
    handleChangeMonth,
    handleChangeWeek,
    handleChangeYear,
    setCalendarView,
    currentDecadeYears,
    minCalendarYear,
    maxCalendarYear,
    calendarView,
    isLastWeek,
    isFirstWeek,
  } = props;
  CalendarControlPanel.displayName = 'CalendarControlPanel';

  switch (calendarView) {
    case monthView: {
      return (
        <ControlPanelContainer>
          <ControlPanelFullMonth
            handleChangeMonth={handleChangeMonth}
            minCalendarYear={minCalendarYear}
            maxCalendarYear={maxCalendarYear}
            month={month}
            year={year}
            setCalendarView={setCalendarView}
          />
        </ControlPanelContainer>
      );
    }
    case weekView: {
      return (
        <ControlPanelContainer>
          <ControlPanelWeek
            handleChangeWeek={handleChangeWeek}
            minCalendarYear={minCalendarYear}
            maxCalendarYear={maxCalendarYear}
            month={month}
            year={year}
            isLastWeek={isLastWeek}
            isFirstWeek={isFirstWeek}
          />
        </ControlPanelContainer>
      );
    }
    case monthsView: {
      return (
        <ControlPanelContainer>
          <ControlPanelMonth
            setCalendarView={setCalendarView}
            minCalendarYear={minCalendarYear}
            handleChangeYear={handleChangeYear}
            maxCalendarYear={maxCalendarYear}
            year={year}
          />
        </ControlPanelContainer>
      );
    }
    case yearsView: {
      return (
        <ControlPanelContainer>
          <ControlPanelYears
            currentDecadeYears={currentDecadeYears}
            minCalendarYear={minCalendarYear}
            maxCalendarYear={maxCalendarYear}
            handleChangeDecade={handleChangeDecade}
          />
        </ControlPanelContainer>
      );
    }
  }
});
