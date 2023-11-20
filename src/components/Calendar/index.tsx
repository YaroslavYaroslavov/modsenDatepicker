import { CalendarBody } from 'components/CalendarBody';
import { CalendarControlPanel } from 'components/CalendarControlPanel';
import { CalendarWeekPanel } from 'components/CalendarWeekPanel';
import { monthsView, monthView } from 'constants/calendarViews';
import { theme } from 'constants/theme';
import { generateDecade } from 'helpers/generateDecade';
import { updateYearAndMonth } from 'helpers/updateYearsAndMonth';
import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { config } from './config';
import { CalendarAllProps } from './interfaces';
import { CalendarContainer } from './styled';

const {
  defaultMaxCalendarYear,
  defaultMinCalendarYear,
  defaultStartWeekCounter,
  monthInYear,
  yearsInDecade,
  firstMonthIndex,
  lastMonthIndex,
  oneYear,
  oneMonth,
  oneWeek,
  firstWeekIndex,
  noDate,
} = config;

export const Calendar: FC<CalendarAllProps> = memo((props) => {
  const {
    selectedDay,
    isInputHaveValue = false,
    handleSelectDay,
    startOnMonday = true,
    maxCalendarYear = defaultMaxCalendarYear,
    minCalendarYear = defaultMinCalendarYear,
    defaultMonth = new Date().getMonth(),
    defaultYear = new Date().getFullYear(),
    defaultCalendarView = monthView,
    selectedFirstDay,
    selectedSecondDay,
    withTodos = false,
    holidayColor = '#ff00e6',
  } = props;

  Calendar.displayName = 'Calendar';
  if (
    defaultYear > maxCalendarYear ||
    defaultYear < minCalendarYear ||
    (selectedDay &&
      (selectedDay.getFullYear() > maxCalendarYear || selectedDay.getFullYear() < minCalendarYear))
  ) {
    return <h1>Props conflict</h1>;
  }

  const [month, setMonth] = useState(defaultMonth % monthInYear);
  const [year, setYear] = useState(defaultYear);
  const [calendarView, setCalendarView] = useState(defaultCalendarView);
  const [isLastWeek, setIsLastWeek] = useState(false);
  const [isFirstWeek, setIsFirstWeek] = useState(true);
  const [weekCounter, setWeekCounter] = useState(defaultStartWeekCounter);

  useEffect(() => {
    setMonth(defaultMonth % monthInYear);
    setYear(defaultYear);
    setCalendarView(defaultCalendarView);
  }, [defaultMonth, defaultYear, defaultCalendarView]);

  useEffect(() => {
    if (selectedDay)
      updateYearAndMonth(selectedDay, setYear, setMonth, maxCalendarYear, minCalendarYear, noDate);
  }, [selectedDay]);

  useEffect(() => {
    if (selectedFirstDay)
      updateYearAndMonth(
        selectedFirstDay,
        setYear,
        setMonth,
        maxCalendarYear,
        minCalendarYear,
        noDate
      );
  }, [selectedFirstDay]);

  useEffect(() => {
    if (selectedSecondDay)
      updateYearAndMonth(
        selectedSecondDay,
        setYear,
        setMonth,
        maxCalendarYear,
        minCalendarYear,
        noDate
      );
  }, [selectedSecondDay]);

  const currentDecadeYears = useMemo(() => {
    return generateDecade(minCalendarYear, maxCalendarYear, year);
  }, [minCalendarYear, maxCalendarYear, year]);

  const handleChangeDecade = useCallback(
    (isSetNextButton: boolean) => {
      if (isSetNextButton) {
        return () => {
          setYear((prev) => prev + yearsInDecade);
        };
      } else
        return () => {
          setYear((prev) => prev - yearsInDecade);
        };
    },
    [yearsInDecade, setYear]
  );

  const handleChangeMonth = useCallback(
    (isSetNextButton: boolean) => {
      if (isSetNextButton) {
        return () => {
          if (month === lastMonthIndex) {
            setYear((prevYear) => prevYear + oneMonth);
            setMonth(firstMonthIndex);
          } else {
            setMonth((prevMonth) => prevMonth + oneMonth);
          }
        };
      } else
        return () => {
          if (month === firstMonthIndex && year) {
            setYear((prevYear) => prevYear - oneMonth);
            setMonth(lastMonthIndex);
          } else {
            setMonth((prevMonth) => prevMonth - oneMonth);
          }
        };
    },
    [month, year, firstMonthIndex, lastMonthIndex, setMonth, setYear, oneMonth]
  );

  const handleChangeWeek = useCallback(
    (isSetNextButton: boolean) => {
      if (isSetNextButton) {
        return () => {
          setWeekCounter((prevCounter) => prevCounter + oneWeek);
          if (isLastWeek) {
            setWeekCounter(firstWeekIndex);
            handleChangeMonth(true)();
          }
        };
      } else
        return () => {
          setWeekCounter((prevCounter) => prevCounter - oneWeek);
          if (isFirstWeek) {
            handleChangeMonth(false)();
          }
        };
    },
    [weekCounter, isFirstWeek, setWeekCounter, firstWeekIndex, isLastWeek]
  );

  const handleChangeYear = useCallback(
    (isSetNextButton: boolean) => {
      if (isSetNextButton) {
        return () => {
          setYear((prevYear) => prevYear + oneYear);
        };
      } else
        return () => {
          setYear((prevYear) => prevYear - oneYear);
        };
    },
    [setYear, oneYear]
  );

  const handleSelectMonth = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      const MonthCell = e.target as HTMLInputElement;
      setMonth(Number(MonthCell.id));
      setCalendarView(monthView);
    },
    [setMonth, setCalendarView]
  );

  const handleSelectYear = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      const YearCell = e.target as HTMLInputElement;
      setYear(Number(YearCell.textContent));
      setCalendarView(monthsView);
    },
    [setYear, setCalendarView]
  );

  return (
    <ThemeProvider theme={theme}>
      <CalendarContainer isclearbuttonvisible={isInputHaveValue.toString()}>
        <CalendarControlPanel
          handleChangeDecade={handleChangeDecade}
          handleChangeMonth={handleChangeMonth}
          handleChangeWeek={handleChangeWeek}
          handleChangeYear={handleChangeYear}
          currentDecadeYears={currentDecadeYears}
          setCalendarView={setCalendarView}
          month={month}
          year={year}
          maxCalendarYear={maxCalendarYear}
          minCalendarYear={minCalendarYear}
          calendarView={calendarView}
          isLastWeek={isLastWeek}
          isFirstWeek={isFirstWeek}
        />
        <CalendarWeekPanel startOnMonday={startOnMonday} calendarView={calendarView} />
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
          holidayColor={holidayColor}
        />
      </CalendarContainer>
    </ThemeProvider>
  );
});
