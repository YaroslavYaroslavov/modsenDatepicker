import React, { FC } from 'react';

interface CalendarCellProps {
  date: Date;
  isWeekend?: boolean;
  isHoliday?: boolean;
  isCurrentMonth: boolean;
  selectedDay?: Date;
  handleSelectDay?: (date: Date) => void;
}

export const CalendarCell: FC<CalendarCellProps> = ({
  date,
  isWeekend,
  isHoliday,
  isCurrentMonth,
  selectedDay,
  handleSelectDay,
}) => {
  const isToday = new Date().toDateString() === date.toDateString();
  const isSelectedDay = date.toDateString() === selectedDay?.toDateString();

  const color = isToday ? 'blue' : isCurrentMonth ? 'black' : 'grey';
  const backgroundColor = isSelectedDay ? 'pink' : 'transparent';

  const selectDate = handleSelectDay
    ? () => {
        handleSelectDay(date);
      }
    : () => {};
  return (
    <div
      onClick={selectDate}
      style={{
        width: '50px',
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        userSelect: 'none',
      }}
    >
      {date.getDate()}
    </div>
  );
};
