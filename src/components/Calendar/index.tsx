import { generateDecade } from 'helpers/generateDecade';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { CalendarBody } from '../CalendarBody';
import { CalendarControlPanel } from '../CalendarControlPanel';
import { CalendarWeekPanel } from '../CalendarWeekPanel';

type StyledComponentProps = {
  isclearbuttonvisible: string;
};

const CalendarContainer = styled.div<StyledComponentProps>`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  box-sizing: border-box;
  border-radius: ${(props) =>
    props.isclearbuttonvisible === 'false'
      ? '10px 10px 10px 10px'
      : '10px 10px 0 0'};
  padding-bottom: 10px;
`;

export interface CalendarAllProps {
  startOnMonday?: boolean;
  selectedDay?: Date;
  handleSelectDay?: (date: Date) => void;
  maxCalendarYear?: number;
  minCalendarYear?: number;
  defaultMonth?: number;
  defaultYear?: number;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
  withTodos?: boolean;
  defaultCalendarView?: 'week' | 'month' | 'months' | 'years';
  isInputHaveValue?: boolean;
}

export const Calendar: FC<CalendarAllProps> = ({
  selectedDay,
  isInputHaveValue = false,
  handleSelectDay,
  startOnMonday = true,
  maxCalendarYear = 3023,
  minCalendarYear = 1020,
  defaultMonth = new Date().getMonth(),
  defaultYear = new Date().getFullYear(),
  defaultCalendarView = 'month',
  selectedFirstDay,
  selectedSecondDay,
  withTodos = false,
}) => {
  const [month, setMonth] = useState(defaultMonth);
  const [year, setYear] = useState(defaultYear);
  const [calendarView, setCalendarView] = useState(defaultCalendarView);
  const [isLastWeek, setIsLastWeek] = useState(false);
  const [isFirstWeek, setIsFirstWeek] = useState(true);
  const [weekCounter, setWeekCounter] = useState(0);

  useEffect(() => {
    if (
      selectedDay &&
      selectedDay.getFullYear() <= maxCalendarYear &&
      selectedDay.getFullYear() >= minCalendarYear
    ) {
      setMonth(selectedDay.getMonth());
      setYear(selectedDay.getFullYear());
    }
  }, [selectedDay]);

  const currentDecadeYears = generateDecade(
    minCalendarYear,
    maxCalendarYear,
    year
  );

  function handleSetToPrevDecade(): void {
    setYear((prev) => prev - 10);
  }

  function handleSetToNextDecade(): void {
    setYear((prev) => prev + 10);
  }

  function handleSetToPrevMonth(): void {
    if (month === 0 && year) {
      setYear((prevState) => prevState - 1);
      setMonth(11);
    } else {
      setMonth((prevState) => prevState - 1);
    }
  }

  function handleSetToNextMonth(): void {
    if (month === 11) {
      setYear((prevState) => prevState + 1);
      setMonth(0);
    } else {
      setMonth((prevState) => prevState + 1);
    }
  }

  function handleSetToPrevWeek(): void {
    setWeekCounter((prevState) => prevState - 1);

    if (isFirstWeek) {
      handleSetToPrevMonth();
    }
  }

  function handleSetToNextWeek(): void {
    setWeekCounter((prevState) => prevState + 1);

    if (isLastWeek) {
      setWeekCounter(0);
      handleSetToNextMonth();
    }
  }

  function handleSetToNextYear(): void {
    setYear((prevState) => prevState + 1);
  }

  function handleSetToPrevYear(): void {
    setYear((prevState) => prevState - 1);
  }

  function handleSelectMonth(e: React.MouseEvent<HTMLElement>): void {
    const MonthCell = e.target as HTMLInputElement;
    setMonth(Number(MonthCell.id));
    setCalendarView('month');
  }
  function handleSelectYear(e: React.MouseEvent<HTMLElement>): void {
    const YearCell = e.target as HTMLInputElement;
    setYear(Number(YearCell.textContent));
    setCalendarView('months');
  }

  return (
    <CalendarContainer isclearbuttonvisible={isInputHaveValue.toString()}>
      <CalendarControlPanel
        handleSetToPrevDecade={handleSetToPrevDecade}
        handleSetToNextDecade={handleSetToNextDecade}
        currentDecadeYears={currentDecadeYears}
        handleSetToPrevMonth={handleSetToPrevMonth}
        handleSetToNextMonth={handleSetToNextMonth}
        handleSetToNextWeek={handleSetToNextWeek}
        handleSetToPrevWeek={handleSetToPrevWeek}
        handleSetToNextYear={handleSetToNextYear}
        handleSetToPrevYear={handleSetToPrevYear}
        setCalendarView={setCalendarView}
        month={month}
        year={year}
        maxCalendarYear={maxCalendarYear}
        minCalendarYear={minCalendarYear}
        calendarView={calendarView}
        isLastWeek={isLastWeek}
        isFirstWeek={isFirstWeek}
      />
      <CalendarWeekPanel
        startOnMonday={startOnMonday}
        calendarView={calendarView}
      />
      <CalendarBody
        withTodos={withTodos}
        selectedFirstDay={selectedFirstDay}
        selectedSecondDay={selectedSecondDay}
        handleSelectYear={handleSelectYear}
        handleSelectMonth={handleSelectMonth}
        startOnMonday={startOnMonday}
        month={month}
        year={year}
        selectedDay={selectedDay}
        handleSelectDay={handleSelectDay}
        calendarView={calendarView}
        setIsLastWeek={setIsLastWeek}
        setIsFirstWeek={setIsFirstWeek}
        weekCounter={weekCounter}
        currentDecadeYears={currentDecadeYears}
      />
    </CalendarContainer>
  );
};
