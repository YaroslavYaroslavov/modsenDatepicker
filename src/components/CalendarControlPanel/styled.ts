import styled from 'styled-components';

export const ControlPanelContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.globalFont};
  justify-content: space-evenly;
  height: 55px;
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
    color: ${(props) => props.theme.colorHoverControl};
    background-color: ${(props) => props.theme.backgroundColorHoverControl};
    border-radius: 7px;
  }
`;
