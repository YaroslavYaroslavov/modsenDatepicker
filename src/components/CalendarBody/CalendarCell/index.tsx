import { holidaysMock } from 'constants/holidaysMock';
import React, { FC, memo, useMemo } from 'react';

import { config } from './config';
import { CalendarCellProps } from './interfaces';
import { CellContainer } from './styled';

const { realMonthOffset, sundayIndex, saturdayIndex } = config;

export const CalendarCell: FC<CalendarCellProps> = memo((props) => {
  const {
    date,
    isCurrentMonth,
    selectedDay,
    selectedFirstDay,
    selectedSecondDay,
    handleSelectDay,
    holidayColor,
    toggleTodoList,
  } = props;

  CalendarCell.displayName = 'CalendarCell';

  const isToday = new Date().toDateString() === date.toDateString();
  const isSelectedDay =
    date.toDateString() === selectedDay?.toDateString() ||
    date.toDateString() === selectedFirstDay?.toDateString() ||
    date.toDateString() === selectedSecondDay?.toDateString();

  const isHoliday = useMemo(() => {
    return holidaysMock.some(
      (holiday) =>
        holiday.day === date.getDate() && holiday.month === date.getMonth() + realMonthOffset
    );
  }, [holidaysMock, date, realMonthOffset]);

  const isWeekend: boolean = date.getDay() === saturdayIndex || date.getDay() === sundayIndex;

  const isBetweenSelectedDays: boolean =
    selectedSecondDay && selectedFirstDay
      ? date.getTime() < selectedSecondDay?.getTime() &&
        date.getTime() > selectedFirstDay?.getTime()
      : false;

  const isFirstDay: boolean = date.toDateString() === selectedFirstDay?.toDateString();

  const isSecondDay: boolean = date.toDateString() === selectedSecondDay?.toDateString();

  return (
    <CellContainer
      holidaycolor={holidayColor}
      isselectedday={isSelectedDay.toString()}
      istoday={isToday.toString()}
      isholiday={isHoliday.toString()}
      isweekend={isWeekend.toString()}
      isfirstday={isFirstDay.toString()}
      isbetweenselecteddays={isBetweenSelectedDays.toString()}
      issecondday={isSecondDay.toString()}
      iscurrentmonth={isCurrentMonth.toString()}
      onClick={handleSelectDay?.bind(this, date)}
      onDoubleClick={toggleTodoList}
    >
      {date.getDate()}
    </CellContainer>
  );
});
