import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const CalendarBodyContainer = styled.body`
  width: ${({ theme }) => theme.containerWidth};
`;

export const CalendarBodyWrapper = styled.main`
  ${centerByFlex}

  flex-wrap: wrap;
`;
