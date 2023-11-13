import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const WeekPanelContainer = styled.div`
  ${centerByFlex}

  font-family: ${({ theme }) => theme.globalFont};
`;
export const WeekPanelCell = styled.div`
  ${centerByFlex}

  width: 32px;
  height: 32px;
`;
