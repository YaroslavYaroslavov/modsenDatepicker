import React, { FC, memo } from 'react';

import { holidaysMock } from '../../../constants/holidaysMock';
import { config } from './config';
import { CalendarCellProps } from './interfaces';
import { CellContainer } from './styled';

const { leftButtonCode, realMonthOffset, sundayIndex, saturdayIndex } = config;

export const CalendarCell: FC<CalendarCellProps> = memo((props) => {
  const {
    date,
    isCurrentMonth,
    selectedDay,
    selectedFirstDay,
    selectedSecondDay,
    handleSelectDay,
    toggleTodoList,
  } = props;

  CalendarCell.displayName = 'CalendarCell';

  const isToday = new Date().toDateString() === date.toDateString();
  const isSelectedDay =
    date.toDateString() === selectedDay?.toDateString() ||
    date.toDateString() === selectedFirstDay?.toDateString() ||
    date.toDateString() === selectedSecondDay?.toDateString();

  const isHoliday: boolean = holidaysMock.some(
    (holiday) =>
      holiday.day === date.getDate() && holiday.month === date.getMonth() + realMonthOffset
  );

  const isWeekend: boolean = date.getDay() === saturdayIndex || date.getDay() === sundayIndex;

  const isBetweenSelectedDays: boolean =
    selectedSecondDay && selectedFirstDay
      ? date.getTime() < selectedSecondDay?.getTime() &&
        date.getTime() > selectedFirstDay?.getTime()
      : false;

  const isFirstDay: boolean = date.toDateString() === selectedFirstDay?.toDateString();

  const isSecondDay: boolean = date.toDateString() === selectedSecondDay?.toDateString();

  const selectDate = handleSelectDay
    ? () => {
        handleSelectDay(date);
      }
    : () => {};

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    if (e.buttons === leftButtonCode && !selectedDay) {
      selectDate();
    }
  };

  return (
    <CellContainer
      isselectedday={isSelectedDay.toString()}
      istoday={isToday.toString()}
      isholiday={isHoliday.toString()}
      isweekend={isWeekend.toString()}
      isfirstday={isFirstDay.toString()}
      isbetweenselecteddays={isBetweenSelectedDays.toString()}
      issecondday={isSecondDay.toString()}
      iscurrentmonth={isCurrentMonth.toString()}
      onMouseOver={handleMouseOver}
      onClick={selectDate}
      onDoubleClick={toggleTodoList}
    >
      {date.getDate()}
    </CellContainer>
  );
});
