import { Button } from 'components/Button';
import React, { FC } from 'react';
interface ControlPanelYearsProps {
  currentDecadeYears: number[];
  minCalendarYear: number;
  maxCalendarYear: number;
  handleSetToPrevDecade: () => void;
  handleSetToNextDecade: () => void;
}

export const ControlPanelYears: FC<ControlPanelYearsProps> = ({
  minCalendarYear,
  maxCalendarYear,
  currentDecadeYears,
  handleSetToPrevDecade,
  handleSetToNextDecade,
}) => {
  return (
    <div>
      {minCalendarYear === currentDecadeYears?.at(0) ? null : (
        <Button callback={handleSetToPrevDecade} isNext={false} />
      )}
      <h3>{`${currentDecadeYears?.at(0)} - ${currentDecadeYears?.at(-1)}`}</h3>
      {maxCalendarYear === currentDecadeYears?.at(-1) ? null : (
        <Button callback={handleSetToNextDecade} isNext={true} />
      )}
    </div>
  );
};
