import React, { FC } from 'react';
import styled from 'styled-components';

import { holidaysMock } from '../../constants/holidaysMock';

type StyledComponentProps = {
  backgroundcolor?: string;
  borderradius?: string;
};

const CellContainer = styled.div<StyledComponentProps>`
  width: 32px;
  height: 32px;
  user-select: none;
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  &:hover {
    background-color: #f1f1f1;
    color: blue;
  }
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};
  border-radius: ${(props) => props.borderradius};
`;

interface CalendarCellProps {
  date: Date;
  isCurrentMonth: boolean;
  selectedDay?: Date;
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
  handleSelectDay?: (date: Date) => void;
  toggleTodoList: () => void;
}

export const CalendarCell: FC<CalendarCellProps> = ({
  date,
  isCurrentMonth,
  selectedDay,
  selectedFirstDay,
  selectedSecondDay,
  handleSelectDay,
  toggleTodoList,
}) => {
  const isToday = new Date().toDateString() === date.toDateString();
  const isSelectedDay =
    date.toDateString() === selectedDay?.toDateString() ||
    date.toDateString() === selectedFirstDay?.toDateString() ||
    date.toDateString() === selectedSecondDay?.toDateString();

  const isHoliday: boolean = holidaysMock.some(
    (holiday) =>
      holiday.day === date.getDate() && holiday.month === date.getMonth() + 1
  );

  const isWeekend: boolean = date.getDay() === 0 || date.getDay() === 6;

  const isBetweenSelectedDays: boolean =
    selectedSecondDay && selectedFirstDay
      ? date.getTime() < selectedSecondDay?.getTime() &&
        date.getTime() > selectedFirstDay?.getTime()
      : false;
  const getColor = (): string => {
    switch (true) {
      case isSelectedDay:
        return 'white';
      case isToday:
        return 'blue';
      case isHoliday || isWeekend:
        return 'red';
      case isCurrentMonth:
        return 'black';
      default:
        return 'grey';
    }
  };

  const getBackgroundColor = (): string => {
    switch (true) {
      case date.toDateString() === selectedFirstDay?.toDateString():
        return '#82b3f5';
      case date.toDateString() === selectedSecondDay?.toDateString():
        return '#3080ea';
      case isBetweenSelectedDays:
        return '#ebf3fe';
      case isSelectedDay:
        return '#3080ea';
      default:
        return 'transparent';
    }
  };

  const getBorderRadius = (): string => {
    switch (true) {
      case date.toDateString() === selectedFirstDay?.toDateString():
        return '10px 0 0 10px;';
      case date.toDateString() === selectedSecondDay?.toDateString():
        return '0 10px 10px 0';
      case isBetweenSelectedDays:
        return '0px';
      default:
        return '10px';
    }
  };

  const color = getColor();
  const backgroundColor = getBackgroundColor();
  const borderRadius = getBorderRadius();

  const selectDate = handleSelectDay
    ? () => {
        handleSelectDay(date);
      }
    : () => {};

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    if (e.buttons === 1 && !selectedDay) {
      selectDate();
    }
  };

  return (
    <CellContainer
      borderradius={borderRadius}
      backgroundcolor={backgroundColor}
      color={color}
      onMouseOver={handleMouseOver}
      onClick={selectDate}
      onDoubleClick={toggleTodoList}
    >
      {date.getDate()}
    </CellContainer>
  );
};
