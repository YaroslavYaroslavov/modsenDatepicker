import React, { useState } from 'react';
import { CalendarControlPanel } from 'components/CalendarControlPanel';
import { CalendarWeekPanel } from 'components/CalendarWeekPanel';
import { CalendarMonthBody } from 'components/CalendarMonthBody';

export const Calendar = ({
  selectedDay,
  handleSelectDay,
}: {
  selectedDay?: Date;
  handleSelectDay?: ((date: Date) => void) | undefined;
}) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const startOnMonday = false;

  function handleSetToPrevMonth(): void {
    if (month === 0) {
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

  return (
    <>
      <CalendarControlPanel
        handleSetToPrevMonth={handleSetToPrevMonth}
        handleSetToNextMonth={handleSetToNextMonth}
        month={month}
        year={year}
      />
      <CalendarWeekPanel startOnMonday={startOnMonday} />
      <CalendarMonthBody
        startOnMonday={startOnMonday}
        month={month}
        year={year}
        selectedDay={selectedDay}
        handleSelectDay={handleSelectDay}
      />
    </>
  );
};
