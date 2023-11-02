import { monthName } from 'constants/monthArray';
import React, { FC } from 'react';

import { MonthCell } from '../MonthCell';

interface MonthBodyProps {
  handleSelectMonth: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const MonthBody: FC<MonthBodyProps> = ({ handleSelectMonth }) => {
  return (
    <div>
      {monthName.map((month, index) => (
        <MonthCell
          handleSelectMonth={handleSelectMonth}
          key={month}
          monthName={month}
          id={`${index}`}
        />
      ))}
    </div>
  );
};
