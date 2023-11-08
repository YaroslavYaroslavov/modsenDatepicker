import { centerByFlex } from 'constants/reuseStyles';
import { getBackgroundColor } from 'helpers/getBackgroundColor';
import { getBorderRadius } from 'helpers/getBorderRadius';
import { getColor } from 'helpers/getColor';
import styled from 'styled-components';

import { StyledComponentProps } from './interfaces';

export const CellContainer = styled.div<StyledComponentProps>`
  width: 32px;
  height: 32px;
  user-select: none;
  ${centerByFlex}
  font-family: ${(props) => props.theme.globalFont};
  &:hover {
    background-color: ${(props) => props.theme.backgroundColorHoverCell};
    color: ${(props) => props.theme.colorHoverCell};
  }
  color: ${({ isselectedday, istoday, isholiday, isweekend, iscurrentmonth }) =>
    getColor(isselectedday, istoday, isholiday, isweekend, iscurrentmonth)};

  background-color: ${({ isfirstday, issecondday, isbetweenselecteddays, isselectedday }) =>
    getBackgroundColor(isfirstday, issecondday, isbetweenselecteddays, isselectedday)};

  border-radius: ${({ isfirstday, issecondday, isbetweenselecteddays }) =>
    getBorderRadius(isfirstday, issecondday, isbetweenselecteddays)};
`;
