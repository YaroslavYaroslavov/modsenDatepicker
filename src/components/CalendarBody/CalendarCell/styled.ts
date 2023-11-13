import { centerByFlex } from 'constants/reuseStyles';
import { getBackgroundColor } from 'helpers/getBackgroundColor';
import { getBorderRadius } from 'helpers/getBorderRadius';
import { getColor } from 'helpers/getColor';
import styled from 'styled-components';

import { StyledComponentProps } from './interfaces';

export const CellContainer = styled.div<StyledComponentProps>`
  ${centerByFlex}
  width: 32px;
  height: 32px;
  user-select: none;
  font-family: ${({ theme }) => theme.globalFont};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColorHoverCell};
    color: ${({ theme }) => theme.colorHoverCell};
  }

  ${({
    isselectedday,
    istoday,
    isholiday,
    isweekend,
    iscurrentmonth,
    holidaycolor,
    isfirstday,
    issecondday,
    isbetweenselecteddays,
  }) => {
    const bgColor = getBackgroundColor(
      isfirstday,
      issecondday,
      isbetweenselecteddays,
      isselectedday
    );
    const borderRadius = getBorderRadius(isfirstday, issecondday, isbetweenselecteddays);
    const textColor = getColor(
      isselectedday,
      istoday,
      isholiday,
      isweekend,
      iscurrentmonth,
      holidaycolor
    );

    return `
      color: ${textColor};
      background-color: ${bgColor};
      border-radius: ${borderRadius};
    `;
  }}
`;
