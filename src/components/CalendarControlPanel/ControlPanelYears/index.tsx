import { Button } from 'components/CalendarControlPanel/Button';
import React, { FC, memo } from 'react';

import { ControlPanelHeader, ControlPanelWrapper } from '../styled';
import { config } from './config';
import { ControlPanelYearsProps } from './interfaces';

const { currentDecadeYearsIndexEndReverse, currentDecadeYearsIndexStart } = config;
export const ControlPanelYears: FC<ControlPanelYearsProps> = memo((props) => {
  const { minCalendarYear, maxCalendarYear, currentDecadeYears, handleChangeDecade } = props;

  ControlPanelYears.displayName = 'ControlPanelYears';

  const isFirstList = minCalendarYear === currentDecadeYears?.at(currentDecadeYearsIndexStart);
  const isLastList = maxCalendarYear === currentDecadeYears?.at(currentDecadeYearsIndexEndReverse);

  return (
    <ControlPanelWrapper>
      {isFirstList ? null : (
        <Button panel={'years'} callback={handleChangeDecade} isSetNextButton={false} />
      )}

      <ControlPanelHeader>{`${currentDecadeYears?.at(
        currentDecadeYearsIndexStart
      )} - ${currentDecadeYears?.at(currentDecadeYearsIndexEndReverse)}`}</ControlPanelHeader>

      {isLastList ? null : (
        <Button panel={'years'} callback={handleChangeDecade} isSetNextButton={true} />
      )}
    </ControlPanelWrapper>
  );
});
