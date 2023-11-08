import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const CalendarBodyContainer = styled.div`
  width: ${(props) => props.theme.containerWidth};
`;

export const CalendarBodyWrapper = styled.div`
  ${centerByFlex}
  flex-wrap: wrap;
`;
