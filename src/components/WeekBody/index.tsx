import { getMonthArray } from 'helpers/getMonthArray';
import React, { FC, useEffect } from 'react';

import { CalendarCell } from '../CalendarCell';

interface WeekBodyProps {
  startOnMonday: boolean;
  month: number;
  toggleTodoList: () => void;
  year: number;
  selectedDay?: Date;
  handleSelectDay: ((date: Date) => void) | undefined;
  weekCounter: number;
  setIsLastWeek: (arg0: boolean) => void;
  setIsFirstWeek: (arg0: boolean) => void;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}

export const WeekBody: FC<WeekBodyProps> = ({
  startOnMonday = true,
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  selectedDay,
  handleSelectDay,
  weekCounter,
  setIsLastWeek,
  setIsFirstWeek,
  selectedFirstDay,
  selectedSecondDay,
  toggleTodoList,
}) => {
  const monthBody = getMonthArray(month, year, startOnMonday);
  const monthBodyClearWeeks = monthBody.filter((week) => {
    return week.some((date) => date.isCurrentMonth === true);
  });
  const currentWeek = monthBodyClearWeeks.at(
    weekCounter % monthBodyClearWeeks.length
  );

  useEffect(() => {
    if (weekCounter % monthBodyClearWeeks.length === 0) {
      setIsFirstWeek(true);
      setIsLastWeek(false);
    } else if (
      weekCounter % monthBodyClearWeeks.length ===
        monthBodyClearWeeks.length - 1 ||
      weekCounter % monthBodyClearWeeks.length === -1
    ) {
      setIsFirstWeek(false);
      setIsLastWeek(true);
    } else {
      setIsFirstWeek(false);
      setIsLastWeek(false);
    }
  }, [weekCounter, month, year]);

  return (
    <div>
      {currentWeek?.map(({ date, isCurrentMonth }) => (
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
      ))}
    </div>
  );
};
