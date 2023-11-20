import monthName from 'constants/monthArray';
import React, { FC, memo } from 'react';

import { MonthCell } from '../MonthCell';
import { MonthBodyProps } from './interfaces';
import { MonthsContainer } from './styled';

export const MonthBody: FC<MonthBodyProps> = memo(({ handleSelectMonth }) => {
  MonthBody.displayName = 'MonthBody';

  return (
    <MonthsContainer>
      {monthName.map((month, index) => (
        <MonthCell
          handleSelectMonth={handleSelectMonth}
          key={month}
          monthName={month}
          id={`${index}`}
        />
      ))}
    </MonthsContainer>
  );
});
