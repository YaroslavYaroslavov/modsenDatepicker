import React from 'react';

const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const CalendarControlPanel = ({
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
    handleSetToPrevMonth,
    handleSetToNextMonth,
}: {
  month: number;
  year: number;
  handleSetToPrevMonth: () => void;
  handleSetToNextMonth: () => void;
}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={handleSetToPrevMonth}>&lt;</button>
            <h3>
                {monthName[month]} {year}
            </h3>
            <button onClick={handleSetToNextMonth}>&gt;</button>
        </div>
    );
};
