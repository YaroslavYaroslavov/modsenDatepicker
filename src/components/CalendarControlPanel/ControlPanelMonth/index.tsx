import { Button } from 'components/CalendarControlPanel/Button';
import React, { FC, memo } from 'react';

import { ControlPanelHeader, ControlPanelWrapper } from '../styled';
import { ControlPanelMonthProps } from './interfaces';

export const ControlPanelMonth: FC<ControlPanelMonthProps> = memo((props) => {
  const {
    year = new Date().getFullYear(),
    minCalendarYear,
    handleChangeYear,
    maxCalendarYear,
    setCalendarView,
  } = props;
  ControlPanelMonth.displayName = 'ControlPanelMonth';
  return (
    <ControlPanelWrapper>
      {year === minCalendarYear ? null : (
        <Button panel={'months'} callback={handleChangeYear} isSetNextButton={false} />
      )}
      <ControlPanelHeader
        onClick={() => {
          setCalendarView('years');
        }}
      >
        {year}
      </ControlPanelHeader>
      {year === maxCalendarYear ? null : (
        <Button panel={'months'} callback={handleChangeYear} isSetNextButton={true} />
      )}
    </ControlPanelWrapper>
  );
});
