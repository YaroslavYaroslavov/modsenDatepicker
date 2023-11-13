import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const YearCell = styled.div`
  ${centerByFlex}
  width: 100px;
  height: 30px;
  font-family: ${({ theme }) => theme.globalFont};
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    color: ${({ theme }) => theme.colorHoverCell};
    background-color: ${({ theme }) => theme.backgroundColorHoverCell};
  }
`;
