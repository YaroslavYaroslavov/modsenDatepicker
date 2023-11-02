import { ControlPanelFullMonth } from 'components/ControlPanelFullMonth';
import { ControlPanelMonth } from 'components/ControlPanelMonth';
import { ControlPanelWeek } from 'components/ControlPanelWeek';
import { ControlPanelYears } from 'components/ControlPanelYears';
import React, { FC } from 'react';
import styled from 'styled-components';

const ControlPanelContainer = styled.div`
  div {
    display: flex;
    align-items: center;
  }
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-evenly;

  h3 {
    width: 190px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #297aec;
      border-radius: 7px;
    }
  }
`;
interface CalendarControlPanelProps {
  month: number;
  year: number;
  handleSetToPrevMonth: () => void;
  handleSetToNextMonth: () => void;
  handleSetToPrevWeek: () => void;
  handleSetToNextWeek: () => void;
  handleSetToPrevYear: () => void;
  handleSetToNextYear: () => void;
  handleSetToPrevDecade: () => void;
  handleSetToNextDecade: () => void;
  currentDecadeYears: number[];
  setCalendarView: (arg0: 'week' | 'month' | 'months' | 'years') => void;
  minCalendarYear: number;
  maxCalendarYear: number;
  isLastWeek: boolean;
  isFirstWeek: boolean;
  calendarView?: 'week' | 'month' | 'months' | 'years';
}

export const CalendarControlPanel: FC<CalendarControlPanelProps> = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  handleSetToPrevMonth,
  handleSetToNextMonth,
  handleSetToPrevWeek,
  handleSetToNextWeek,
  handleSetToNextYear,
  handleSetToPrevYear,
  handleSetToPrevDecade,
  handleSetToNextDecade,
  setCalendarView,
  currentDecadeYears,
  minCalendarYear,
  maxCalendarYear,
  calendarView,
  isLastWeek,
  isFirstWeek,
}) => {
  switch (calendarView) {
    case 'month': {
      return (
        <ControlPanelContainer>
          <ControlPanelFullMonth
            handleSetToPrevMonth={handleSetToPrevMonth}
            handleSetToNextMonth={handleSetToNextMonth}
            minCalendarYear={minCalendarYear}
            maxCalendarYear={maxCalendarYear}
            month={month}
            year={year}
            setCalendarView={setCalendarView}
          />
        </ControlPanelContainer>
      );
    }
    case 'week': {
      return (
        <ControlPanelContainer>
          <ControlPanelWeek
            handleSetToPrevWeek={handleSetToPrevWeek}
            handleSetToNextWeek={handleSetToNextWeek}
            minCalendarYear={minCalendarYear}
            maxCalendarYear={maxCalendarYear}
            month={month}
            year={year}
            isLastWeek={isLastWeek}
            isFirstWeek={isFirstWeek}
          />
        </ControlPanelContainer>
      );
    }
    case 'months': {
      return (
        <ControlPanelContainer>
          <ControlPanelMonth
            handleSetToNextYear={handleSetToNextYear}
            handleSetToPrevYear={handleSetToPrevYear}
            setCalendarView={setCalendarView}
            minCalendarYear={minCalendarYear}
            maxCalendarYear={maxCalendarYear}
            year={year}
          />
        </ControlPanelContainer>
      );
    }
    case 'years': {
      return (
        <ControlPanelContainer>
          <ControlPanelYears
            currentDecadeYears={currentDecadeYears}
            minCalendarYear={minCalendarYear}
            maxCalendarYear={maxCalendarYear}
            handleSetToPrevDecade={handleSetToPrevDecade}
            handleSetToNextDecade={handleSetToNextDecade}
          />
        </ControlPanelContainer>
      );
    }
  }
};
