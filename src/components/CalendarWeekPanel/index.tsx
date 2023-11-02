import React, { FC } from 'react';
import { styled } from 'styled-components';

const WeekPanelContainer = styled.div`
  justify-content: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
`;
const WeekPanelCell = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface CalendarWeekPanelProps {
  startOnMonday: boolean;
  calendarView?: 'week' | 'month' | 'months' | 'years';
}

export const CalendarWeekPanel: FC<CalendarWeekPanelProps> = ({
  startOnMonday = true,
  calendarView,
}) => {
  const week = startOnMonday
    ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return calendarView === 'months' || calendarView === 'years' ? null : (
    <WeekPanelContainer>
      {week.map((day) => (
        <WeekPanelCell key={day}>{day}</WeekPanelCell>
      ))}
    </WeekPanelContainer>
  );
};
