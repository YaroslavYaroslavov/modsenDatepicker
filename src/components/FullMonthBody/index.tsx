import { getMonthArray } from 'helpers/getMonthArray';
import React, { FC } from 'react';

import { CalendarCell } from '../CalendarCell';
interface FullMonthBodyProps {
  toggleTodoList: () => void;
  startOnMonday: boolean;
  month: number;
  year: number;
  selectedDay?: Date;
  handleSelectDay?: (date: Date) => void;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}

export const FullMonthBody: FC<FullMonthBodyProps> = ({
  startOnMonday = true,
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  selectedDay,
  handleSelectDay,
  selectedFirstDay,
  selectedSecondDay,
  toggleTodoList,
}) => {
  const monthBody = getMonthArray(month, year, startOnMonday);

  return (
    <div>
      {monthBody.map((week) => {
        return week.map(({ date, isCurrentMonth }) => (
          <CalendarCell
            toggleTodoList={toggleTodoList}
            selectedFirstDay={selectedFirstDay}
            selectedSecondDay={selectedSecondDay}
            key={date.toLocaleDateString()}
            selectedDay={selectedDay}
            date={date}
            isCurrentMonth={isCurrentMonth}
            handleSelectDay={handleSelectDay}
          />
        ));
      })}
    </div>
  );
};
