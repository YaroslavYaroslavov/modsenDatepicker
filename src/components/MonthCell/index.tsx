import React, { FC } from 'react';
import styled from 'styled-components';

const MonthCellContainer = styled.div`
  display: flex;
  width: 100px;
  font-family: Arial, Helvetica, sans-serif;
  height: 30px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #297aec;
    border-radius: 7px;
  }
`;

interface MonthCellProps {
  monthName: string;
  id: string;
  handleSelectMonth: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const MonthCell: FC<MonthCellProps> = ({
  monthName,
  id,
  handleSelectMonth,
}) => {
  return (
    <MonthCellContainer onClick={handleSelectMonth} id={id}>
      {monthName}
    </MonthCellContainer>
  );
};
