import { Button } from 'components/CalendarControlPanel/Button';
import { yearsView } from 'constants/calendarViews';
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

  const isLastList = year === maxCalendarYear;
  const isFirstList = year === minCalendarYear;

  return (
    <ControlPanelWrapper>
      {isFirstList ? null : (
        <Button panel={'months'} callback={handleChangeYear} isSetNextButton={false} />
      )}
      <ControlPanelHeader onClick={setCalendarView.bind(this, yearsView)}>
        {year}
      </ControlPanelHeader>
      {isLastList ? null : (
        <Button panel={'months'} callback={handleChangeYear} isSetNextButton={true} />
      )}
    </ControlPanelWrapper>
  );
});
