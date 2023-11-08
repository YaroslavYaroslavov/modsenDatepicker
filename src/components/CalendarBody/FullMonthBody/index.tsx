import { getMonthArray } from 'helpers/getMonthArray';
import React, { FC, memo } from 'react';

import { CalendarCell } from '../CalendarCell';
import { CalendarBodyWrapper } from '../styled';
import { FullMonthBodyProps } from './interfaces';

export const FullMonthBody: FC<FullMonthBodyProps> = memo((props) => {
  const {
    startOnMonday = true,
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    selectedDay,
    handleSelectDay,
    selectedFirstDay,
    selectedSecondDay,
    toggleTodoList,
  } = props;

  FullMonthBody.displayName = 'FullMonthBody';

  const monthBody = getMonthArray(month, year, startOnMonday);

  return (
    <CalendarBodyWrapper>
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
    </CalendarBodyWrapper>
  );
});