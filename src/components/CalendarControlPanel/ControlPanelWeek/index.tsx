import { config } from 'components/Calendar/config';
import { Button } from 'components/CalendarControlPanel/Button';
import monthName from 'constants/monthArray';
import React, { FC, memo } from 'react';

import { ControlPanelHeader, ControlPanelWrapper } from '../styled';
import { ControlPanelWeekProps } from './interfaces';

const { lastMonthIndex, firstMonthIndex } = config;

export const ControlPanelWeek: FC<ControlPanelWeekProps> = memo((props) => {
  const {
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    minCalendarYear,
    maxCalendarYear,
    isFirstWeek,
    handleChangeWeek,

    isLastWeek,
  } = props;
  ControlPanelWeek.displayName = 'ControlPanelWeek';
  return (
    <ControlPanelWrapper>
      {month === firstMonthIndex && year === minCalendarYear && isFirstWeek ? null : (
        <Button panel={'week'} callback={handleChangeWeek} isSetNextButton={false} />
      )}
      <ControlPanelHeader>
        {monthName[month % monthName.length]} {year}
      </ControlPanelHeader>
      {month === lastMonthIndex && year === maxCalendarYear && isLastWeek ? null : (
        <Button panel={'week'} callback={handleChangeWeek} isSetNextButton={true} />
      )}
    </ControlPanelWrapper>
  );
});
