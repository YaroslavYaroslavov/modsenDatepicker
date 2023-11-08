import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const WeekPanelContainer = styled.div`
  ${centerByFlex}
  font-family: ${(props) => props.theme.globalFont};
`;
export const WeekPanelCell = styled.div`
  width: 32px;
  height: 32px;
  ${centerByFlex}
`;
