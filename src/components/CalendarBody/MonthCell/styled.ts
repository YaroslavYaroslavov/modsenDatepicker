import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const MonthCellContainer = styled.div`
  width: 100px;
  font-family: ${(props) => props.theme.globalFont};
  height: 30px;
  font-size: 15px;
  ${centerByFlex}
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.backgroundColorHoverCell};
    color: ${(props) => props.theme.colorHoverCell};
    border-radius: 7px;
  }
`;
