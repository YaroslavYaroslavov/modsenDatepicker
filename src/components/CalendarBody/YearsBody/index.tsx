import React, { FC, memo } from 'react';

import { CalendarBodyWrapper } from '../styled';
import { YearsBodyProps } from './interfaces';
import { YearCell } from './styled';

export const YearsBody: FC<YearsBodyProps> = memo(
  ({ currentDecadeYears, handleSelectYear }: YearsBodyProps) => {
    YearsBody.displayName = 'YearsBody';

    return (
      <CalendarBodyWrapper>
        {currentDecadeYears.map((year) => (
          <YearCell onClick={handleSelectYear} key={year}>
            {year}
          </YearCell>
        ))}
      </CalendarBodyWrapper>
    );
  }
);
