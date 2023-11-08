import React, { FC, memo } from 'react';

import { MonthCellProps } from './interfaces';
import { MonthCellContainer } from './styled';

export const MonthCell: FC<MonthCellProps> = memo(({ monthName, id, handleSelectMonth }) => {
  MonthCell.displayName = 'MonthCell';

  return (
    <MonthCellContainer onClick={handleSelectMonth} id={id}>
      {monthName}
    </MonthCellContainer>
  );
});
