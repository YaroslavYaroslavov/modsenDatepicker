import { StyledComponentProps } from 'components/Calendar/interfaces';
import { centerByFlexColumn } from 'constants/reuseStyles';
import styled from 'styled-components';

export const CalendarContainer = styled.div<StyledComponentProps>`
  ${centerByFlexColumn}

  box-sizing: border-box;
  padding-bottom: 10px;

  width: ${({ theme }) => theme.containerWidth};

  border: ${({ theme }) => theme.defaultBorder};

  border-radius: ${({ isclearbuttonvisible }) =>
    isclearbuttonvisible === 'false' ? '10px 10px 10px 10px' : '10px 10px 0 0'};
`;
