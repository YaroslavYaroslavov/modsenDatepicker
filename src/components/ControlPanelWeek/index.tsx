import { Button } from 'components/Button';
import { monthName } from 'constants/monthArray';
import React, { FC } from 'react';

interface ControlPanelWeekProps {
  month: number;
  year: number;
  handleSetToPrevWeek: () => void;
  handleSetToNextWeek: () => void;
  minCalendarYear: number;
  maxCalendarYear: number;
  isFirstWeek: boolean;
  isLastWeek: boolean;
}

export const ControlPanelWeek: FC<ControlPanelWeekProps> = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  handleSetToPrevWeek,
  handleSetToNextWeek,
  minCalendarYear,
  maxCalendarYear,
  isFirstWeek,
  isLastWeek,
}) => {
  return (
    <div>
      {month === 0 && year === minCalendarYear && isFirstWeek ? null : (
        <Button callback={handleSetToPrevWeek} isNext={false} />
      )}
      <h3>
        {monthName[month]} {year}
      </h3>
      {month === 11 && year === maxCalendarYear && isLastWeek ? null : (
        <Button callback={handleSetToNextWeek} isNext={true} />
      )}
    </div>
  );
};
