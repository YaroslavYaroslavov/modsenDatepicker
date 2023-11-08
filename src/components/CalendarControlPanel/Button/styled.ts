import styled from 'styled-components';

import { StyledComponentProps } from './interfaces';

export const ButtonStyled = styled.button<StyledComponentProps>`
  border: none;
  color: ${(props) => props.theme.controlPanelColor};
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.controlPanelColorBackground};
  &:hover {
    color: ${(props) => props.theme.colorHoverControl};
    background-color: ${(props) => props.theme.backgroundColorHoverControl};
  }
  border-radius: ${(props) =>
    props.issetnextbutton === 'true' ? '0 10px 10px 0' : '10px 0 0 10px'};
`;
