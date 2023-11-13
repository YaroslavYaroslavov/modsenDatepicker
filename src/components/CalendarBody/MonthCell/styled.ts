import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const MonthCellContainer = styled.div`
  ${centerByFlex}

  font-family: ${({ theme }) => theme.globalFont};

  width: 100px;
  height: 30px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColorHoverCell};
    color: ${({ theme }) => theme.colorHoverCell};
    border-radius: 7px;
  }
`;
