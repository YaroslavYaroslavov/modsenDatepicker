import { Button } from 'components/CalendarControlPanel/Button';
import React, { FC, memo } from 'react';

import { ControlPanelHeader, ControlPanelWrapper } from '../styled';
import { config } from './config';
import { ControlPanelYearsProps } from './interfaces';

const { currentDecadeYearsIndexEndReverse, currentDecadeYearsIndexStart } = config;
export const ControlPanelYears: FC<ControlPanelYearsProps> = memo((props) => {
  const { minCalendarYear, maxCalendarYear, currentDecadeYears, handleChangeDecade } = props;
  ControlPanelYears.displayName = 'ControlPanelYears';
  return (
    <ControlPanelWrapper>
      {minCalendarYear === currentDecadeYears?.at(currentDecadeYearsIndexStart) ? null : (
        <Button panel={'years'} callback={handleChangeDecade} isSetNextButton={false} />
      )}
      <ControlPanelHeader>{`${currentDecadeYears?.at(
        currentDecadeYearsIndexStart
      )} - ${currentDecadeYears?.at(currentDecadeYearsIndexEndReverse)}`}</ControlPanelHeader>
      {maxCalendarYear === currentDecadeYears?.at(currentDecadeYearsIndexEndReverse) ? null : (
        <Button panel={'years'} callback={handleChangeDecade} isSetNextButton={true} />
      )}
    </ControlPanelWrapper>
  );
});
