import React, { FC } from 'react';
import styled from 'styled-components';

const YearCell = styled.div`
  width: 100px;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    color: white;
    background-color: #297aed;
  }
`;

interface YearsBodyProps {
  year: number;
  currentDecadeYears: number[];
  handleSelectYear: (e: React.MouseEvent<HTMLElement>) => void;
}

export const YearsBody: FC<YearsBodyProps> = ({
  currentDecadeYears,
  handleSelectYear,
}: YearsBodyProps) => {
  return (
    <div>
      {currentDecadeYears.map((year) => (
        <YearCell onClick={handleSelectYear} key={year}>
          {year}
        </YearCell>
      ))}
    </div>
  );
};
