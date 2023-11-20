import { getMonthArray } from 'helpers/getMonthArray';
import React, { FC, memo, useEffect, useMemo, useState } from 'react';

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
    holidayColor,
  } = props;

  WeekBody.displayName = 'WeekBody';

  const monthBody = useMemo(
    () => getMonthArray(month, year, startOnMonday),
    [month, year, startOnMonday]
  );

  const monthBodyClearWeeks = useMemo(() => {
    return monthBody.filter((week) => {
      return week.some((date) => date.isCurrentMonth === true);
    });
  }, [monthBody]);

  const findWeekIndexByDate = (
    date: Date,
    monthBodyClearWeeks: {
      date: Date;
      isCurrentMonth: boolean;
    }[][]
  ) => {
    let index = 0;
    monthBodyClearWeeks.forEach((week, i) => {
      week.forEach((day: { date: Date }) => {
        if (day.date.getDate() === date.getDate()) {
          index = i;
        }
      });
    });
    return index;
  };

  const getStartWeek = () => {
    if (selectedDay) {
      return monthBodyClearWeeks[findWeekIndexByDate(selectedDay, monthBodyClearWeeks)];
    } else {
      return monthBodyClearWeeks.at(weekCounter % monthBodyClearWeeks.length);
    }
  };

  const [currentWeek, setCurrentWeek] = useState(getStartWeek());

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
    setCurrentWeek(monthBodyClearWeeks.at(weekCounter % monthBodyClearWeeks.length));
  }, [weekCounter, month, year]);

  useEffect(() => {
    if (selectedDay) {
      setCurrentWeek(monthBodyClearWeeks[findWeekIndexByDate(selectedDay, monthBodyClearWeeks)]);
    }
    if (selectedFirstDay) {
      setCurrentWeek(
        monthBodyClearWeeks[findWeekIndexByDate(selectedFirstDay, monthBodyClearWeeks)]
      );
    }
    if (selectedSecondDay) {
      setCurrentWeek(
        monthBodyClearWeeks[findWeekIndexByDate(selectedSecondDay, monthBodyClearWeeks)]
      );
    }
  }, [selectedDay, selectedFirstDay, selectedSecondDay, month, year]);

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
          holidayColor={holidayColor}
          handleSelectDay={handleSelectDay}
        />
      ))}
    </CalendarBodyWrapper>
  );
});
