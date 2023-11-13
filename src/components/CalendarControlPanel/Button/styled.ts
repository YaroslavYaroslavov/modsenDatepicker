import styled from 'styled-components';

import { StyledComponentProps } from './interfaces';

const buttomSideLength = '25px';

export const ButtonStyled = styled.button<StyledComponentProps>`
  border: none;

  width: ${buttomSideLength};
  height: ${buttomSideLength};

  color: ${({ theme }) => theme.controlPanelColor};

  background-color: ${({ theme }) => theme.controlPanelColorBackground};

  &:hover {
    color: ${({ theme }) => theme.colorHoverControl};
    background-color: ${({ theme }) => theme.backgroundColorHoverControl};
  }

  border-radius: ${(props) =>
    props.issetnextbutton === 'true' ? '0 10px 10px 0' : '10px 0 0 10px'};
`;
