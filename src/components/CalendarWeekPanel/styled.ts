import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

const weekPanelCellSideLength = '32px';

export const WeekPanelContainer = styled.div`
  ${centerByFlex}

  font-family: ${({ theme }) => theme.globalFont};
`;
export const WeekPanelCell = styled.div`
  ${centerByFlex}

  width: ${weekPanelCellSideLength};
  height: ${weekPanelCellSideLength};
`;
