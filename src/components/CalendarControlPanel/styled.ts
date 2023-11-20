import { flexAlignCenter } from 'constants/reuseStyles';
import styled from 'styled-components';

export const ControlPanelContainer = styled.header`
  ${flexAlignCenter}

  justify-content: space-evenly;
  height: 55px;

  font-family: ${({ theme }) => theme.globalFont};
`;

export const ControlPanelWrapper = styled.main`
  ${flexAlignCenter}
`;

export const ControlPanelHeader = styled.header`
  width: 190px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorHoverControl};
    background-color: ${({ theme }) => theme.backgroundColorHoverControl};
    border-radius: 7px;
  }
`;
