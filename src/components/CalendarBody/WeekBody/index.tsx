import { getMonthArray } from 'helpers/getMonthArray';
import React, { FC, memo, useEffect } from 'react';

import { CalendarCell } from '../CalendarCell';
import { CalendarBodyWrapper } from '../styled';
import { config } from './config';
import { WeekBodyProps } from './interfaces';

const { fisrWeekIndex, offsetTolastWeekIndex, lastWeekIndexReverse } = config;

export const WeekBody: FC<WeekBodyProps> = memo((props) => {
  const {
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
  } = props;
  WeekBody.displayName = 'WeekBody';
  const monthBody = getMonthArray(month, year, startOnMonday);
  const monthBodyClearWeeks = monthBody.filter((week) => {
    return week.some((date) => date.isCurrentMonth === true);
  });
  const currentWeek = monthBodyClearWeeks.at(weekCounter % monthBodyClearWeeks.length);

  useEffect(() => {
    if (weekCounter % monthBodyClearWeeks.length === fisrWeekIndex) {
      setIsFirstWeek(true);
      setIsLastWeek(false);
    } else if (
      weekCounter % monthBodyClearWeeks.length ===
        monthBodyClearWeeks.length - offsetTolastWeekIndex ||
      weekCounter % monthBodyClearWeeks.length === lastWeekIndexReverse
    ) {
      setIsFirstWeek(false);
      setIsLastWeek(true);
    } else {
      setIsFirstWeek(false);
      setIsLastWeek(false);
    }
  }, [weekCounter, month, year]);

  return (
    <CalendarBodyWrapper>
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
    </CalendarBodyWrapper>
  );
});
