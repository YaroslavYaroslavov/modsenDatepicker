import { cellParams, centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const MonthCellContainer = styled.div`
  ${centerByFlex}

  font-family: ${({ theme }) => theme.globalFont};

  width: 100px;
  ${cellParams}

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColorHoverCell};
    color: ${({ theme }) => theme.colorHoverCell};
    border-radius: 7px;
  }
`;
