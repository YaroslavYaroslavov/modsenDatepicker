import { FullMonthBody } from 'components/FullMonthBody';
import { MonthBody } from 'components/MonthBody';
import { ToDoContainer } from 'components/TodoContainer';
import { WeekBody } from 'components/WeekBody';
import { YearsBody } from 'components/YearsBody';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

const CalendarBodyContainer = styled.div`
  width: 250px;
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

interface CalendarBodyProps {
  startOnMonday: boolean;
  withTodos: boolean;
  month: number;
  year: number;
  selectedDay?: Date;
  calendarView?: 'week' | 'month' | 'months' | 'years';
  handleSelectDay?: (date: Date) => void;
  weekCounter: number;
  setIsLastWeek: (arg0: boolean) => void;
  setIsFirstWeek: (arg0: boolean) => void;
  handleSelectMonth: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleSelectYear: (e: React.MouseEvent<HTMLElement>) => void;
  currentDecadeYears: number[];
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}

export const CalendarBody: FC<CalendarBodyProps> = ({
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
}) => {
  const [todoListOpen, setTodoListOpen] = useState(true);
  const toggleTodoList = (): void => {
    setTodoListOpen((prevState: boolean) => !prevState);
  };

  switch (calendarView) {
    case 'month': {
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
          />
          {withTodos && selectedDay && todoListOpen ? (
            <ToDoContainer selectedDay={selectedDay} />
          ) : null}
        </CalendarBodyContainer>
      );
    }

    case 'week': {
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
            toggleTodoList={toggleTodoList}
          />
          {withTodos && selectedDay && todoListOpen ? (
            <ToDoContainer selectedDay={selectedDay} />
          ) : null}
        </CalendarBodyContainer>
      );
    }
    case 'months': {
      return (
        <CalendarBodyContainer>
          <MonthBody handleSelectMonth={handleSelectMonth} />;
        </CalendarBodyContainer>
      );
    }
    case 'years': {
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
};
