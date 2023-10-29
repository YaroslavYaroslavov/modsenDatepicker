import { CalendarCell } from '../CalendarCell';
import { getMonthArray } from 'helpers/getMonthArray';
import React from 'react';

export const CalendarMonthBody = ({
    startOnMonday = true,
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    selectedDay,
    handleSelectDay,
}: {
  startOnMonday: boolean;
  month: number;
  year: number;
  selectedDay?: Date;
  handleSelectDay: ((date: Date) => void) | undefined;
}) => {
    const monthBody = getMonthArray(month, year, startOnMonday);

    return (
        <div
            style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                width: '450px',
                flexWrap: 'wrap',
            }}
        >
            {monthBody.map((week) => {
                return week.map(({ date, isCurrentMonth }) => (
                    <CalendarCell
                        key={date.toLocaleDateString()}
                        selectedDay={selectedDay}
                        date={date}
                        isCurrentMonth={isCurrentMonth}
                        handleSelectDay={handleSelectDay}
                    />
                ));
            })}
        </div>
    );
};
