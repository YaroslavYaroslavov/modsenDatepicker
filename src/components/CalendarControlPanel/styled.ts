import styled from 'styled-components';

export const ControlPanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 55px;

  font-family: ${({ theme }) => theme.globalFont};
`;

export const ControlPanelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ControlPanelHeader = styled.div`
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
