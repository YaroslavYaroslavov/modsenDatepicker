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

  return (
    <ControlPanelWrapper>
      {month === firstMonthIndex && year === minCalendarYear ? null : (
        <Button panel={monthView} callback={handleChangeMonth} isSetNextButton={false} />
      )}
      <ControlPanelHeader onClick={setCalendarView.bind(this, monthsView)}>
        {monthName[month % monthName.length]} {year}
      </ControlPanelHeader>
      {month === lastMonthIndex && year === maxCalendarYear ? null : (
        <Button panel={monthView} callback={handleChangeMonth} isSetNextButton={true} />
      )}
    </ControlPanelWrapper>
  );
});
