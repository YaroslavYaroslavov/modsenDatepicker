import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const YearCell = styled.div`
  ${centerByFlex}
  width: 100px;
  height: 30px;
  font-family: ${(props) => props.theme.globalFont};
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    color: ${(props) => props.theme.colorHoverCell};
    background-color: ${(props) => props.theme.backgroundColorHoverCell};
  }
`;
