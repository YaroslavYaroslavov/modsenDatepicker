import { StyledComponentProps } from 'components/Calendar/interfaces';
import styled from 'styled-components';

export const CalendarContainer = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 10px;

  width: ${({ theme }) => theme.containerWidth};

  border: ${({ theme }) => theme.defaultBorder};

  border-radius: ${(props) =>
    props.isclearbuttonvisible === 'false' ? '10px 10px 10px 10px' : '10px 10px 0 0'};
`;
