import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const CalendarBodyContainer = styled.div`
  width: ${({ theme }) => theme.containerWidth};
`;

export const CalendarBodyWrapper = styled.div`
  ${centerByFlex}

  flex-wrap: wrap;
`;
