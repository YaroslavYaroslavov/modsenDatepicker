import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

const weekPanelCellSideLength = '32px';

export const WeekPanelContainer = styled.main`
  ${centerByFlex}

  font-family: ${({ theme }) => theme.globalFont};
`;
export const WeekPanelCell = styled.span`
  ${centerByFlex}

  width: ${weekPanelCellSideLength};
  height: ${weekPanelCellSideLength};
`;
