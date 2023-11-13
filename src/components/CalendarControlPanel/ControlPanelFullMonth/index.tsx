import { config } from 'components/Calendar/config';
import { Button } from 'components/CalendarControlPanel/Button';
import { monthsView, monthView } from 'constants/calendarViews';
import monthName from 'constants/monthArray';
import React, { FC, memo } from 'react';

import { ControlPanelHeader, ControlPanelWrapper } from '../styled';
import { ControlPanelFullMonthProps } from './interfaces';

const { lastMonthIndex, firstMonthIndex } = config;

export const ControlPanelFullMonth: FC<ControlPanelFullMonthProps> = memo((props) => {
  const {
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    minCalendarYear,
    maxCalendarYear,
    handleChangeMonth,
    setCalendarView,
  } = props;
  ControlPanelFullMonth.displayName = 'ControlPanelFullMonth';

  const isFirstList = month === firstMonthIndex && year === minCalendarYear;
  const isLastList = month === lastMonthIndex && year === maxCalendarYear;

  return (
    <ControlPanelWrapper>
      {isFirstList ? null : (
        <Button panel={monthView} callback={handleChangeMonth} isSetNextButton={false} />
      )}
      <ControlPanelHeader onClick={setCalendarView.bind(this, monthsView)}>
        {monthName[month % monthName.length]} {year}
      </ControlPanelHeader>
      {isLastList ? null : (
        <Button panel={monthView} callback={handleChangeMonth} isSetNextButton={true} />
      )}
    </ControlPanelWrapper>
  );
});
