import { Button } from 'components/Button';
import { monthName } from 'constants/monthArray';
import React, { FC } from 'react';

interface ControlPanelFullMonthProps {
  month: number;
  year: number;
  handleSetToPrevMonth: () => void;
  handleSetToNextMonth: () => void;
  minCalendarYear: number;
  maxCalendarYear: number;
  setCalendarView: (arg0: 'week' | 'month' | 'months' | 'years') => void;
}

export const ControlPanelFullMonth: FC<ControlPanelFullMonthProps> = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  handleSetToPrevMonth,
  handleSetToNextMonth,
  minCalendarYear,
  maxCalendarYear,
  setCalendarView,
}) => {
  return (
    <>
      {month === 0 && year === minCalendarYear ? null : (
        <Button callback={handleSetToPrevMonth} isNext={false} />
      )}
      <h3
        onClick={() => {
          setCalendarView('months');
        }}
      >
        {monthName[month]} {year}
      </h3>
      {month === 11 && year === maxCalendarYear ? null : (
        <Button callback={handleSetToNextMonth} isNext={true} />
      )}
    </>
  );
};
