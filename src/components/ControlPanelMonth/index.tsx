import { Button } from 'components/Button';
import React, { FC } from 'react';

interface ControlPanelMonthProps {
  year: number;
  setCalendarView: (arg0: 'week' | 'month' | 'months' | 'years') => void;
  handleSetToPrevYear: () => void;
  handleSetToNextYear: () => void;
  minCalendarYear: number;
  maxCalendarYear: number;
}

export const ControlPanelMonth: FC<ControlPanelMonthProps> = ({
  year = new Date().getFullYear(),
  handleSetToPrevYear,
  handleSetToNextYear,
  minCalendarYear,
  maxCalendarYear,
  setCalendarView,
}) => {
  return (
    <div>
      {year === minCalendarYear ? null : (
        <Button callback={handleSetToPrevYear} isNext={false} />
      )}
      <h3
        onClick={() => {
          setCalendarView('years');
        }}
      >
        {year}
      </h3>
      {year === maxCalendarYear ? null : (
        <Button callback={handleSetToNextYear} isNext={true} />
      )}
    </div>
  );
};
