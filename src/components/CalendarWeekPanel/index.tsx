import React from 'react';

export const CalendarWeekPanel = ({
    startOnMonday = true,
}: {
  startOnMonday: boolean;
}) => {
    const week = startOnMonday
        ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
        : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {week.map((day) => (
                <div key={day}>{day}</div>
            ))}
        </div>
    );
};
