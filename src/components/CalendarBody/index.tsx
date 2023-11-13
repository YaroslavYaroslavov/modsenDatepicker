import { ToDoContainer } from 'components/TodoContainer';
import { monthsView, monthView, weekView, yearsView } from 'constants/calendarViews';
import React, { FC, memo, useState } from 'react';

import { FullMonthBody } from './FullMonthBody';
import { CalendarBodyProps } from './interfaces';
import { MonthBody } from './MonthBody';
import { CalendarBodyContainer } from './styled';
import { WeekBody } from './WeekBody';
import { YearsBody } from './YearsBody';

export const CalendarBody: FC<CalendarBodyProps> = memo((props) => {
  const {
    startOnMonday = true,
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    selectedDay,
    handleSelectDay,
    calendarView,
    weekCounter,
    setIsLastWeek,
    setIsFirstWeek,
    handleSelectMonth,
    handleSelectYear,
    selectedFirstDay,
    selectedSecondDay,
    currentDecadeYears,
    withTodos,
    holidayColor,
  } = props;

  CalendarBody.displayName = 'CalendarBody';

  const [todoListOpen, setTodoListOpen] = useState(true);
  const toggleTodoList = (): void => {
    setTodoListOpen((prevState: boolean) => !prevState);
  };

  switch (calendarView) {
    case monthView: {
      return (
        <CalendarBodyContainer>
          <FullMonthBody
            selectedFirstDay={selectedFirstDay}
            selectedSecondDay={selectedSecondDay}
            startOnMonday={startOnMonday}
            month={month}
            year={year}
            selectedDay={selectedDay}
            handleSelectDay={handleSelectDay}
            toggleTodoList={toggleTodoList}
            holidayColor={holidayColor}
          />
          {withTodos && selectedDay && todoListOpen && <ToDoContainer selectedDay={selectedDay} />}
        </CalendarBodyContainer>
      );
    }

    case weekView: {
      return (
        <CalendarBodyContainer>
          <WeekBody
            selectedFirstDay={selectedFirstDay}
            selectedSecondDay={selectedSecondDay}
            startOnMonday={startOnMonday}
            month={month}
            year={year}
            selectedDay={selectedDay}
            handleSelectDay={handleSelectDay}
            weekCounter={weekCounter}
            setIsLastWeek={setIsLastWeek}
            setIsFirstWeek={setIsFirstWeek}
            holidayColor={holidayColor}
            toggleTodoList={toggleTodoList}
          />
          {withTodos && selectedDay && todoListOpen && <ToDoContainer selectedDay={selectedDay} />}
        </CalendarBodyContainer>
      );
    }
    case monthsView: {
      return (
        <CalendarBodyContainer>
          <MonthBody handleSelectMonth={handleSelectMonth} />;
        </CalendarBodyContainer>
      );
    }
    case yearsView: {
      return (
        <CalendarBodyContainer>
          <YearsBody
            year={year}
            currentDecadeYears={currentDecadeYears}
            handleSelectYear={handleSelectYear}
          />
        </CalendarBodyContainer>
      );
    }
  }
});
