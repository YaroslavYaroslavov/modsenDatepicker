import styled from 'styled-components';
type StyledComponentProps = {
  isnotvalid?: string;
};

export const ClearButton = styled.button`
  width: 100%;
  height: 25px;
  margin: 0;
  border-radius: 0 0 7px 7px;
  background-color: ${(props) => props.theme.colorHoverControl};
  border: ${(props) => props.theme.defaultBorder};
  border-top: 0px;
  height: 40px;
  font-family: ${(props) => props.theme.globalFont};
  &:hover {
    color: ${(props) => props.theme.backgroundColorHoverCell};
    background-color: ${(props) => props.theme.backgroundColorHoverControl};
  }
`;
export const WithDatePicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.theme.containerWidth};
`;
export const InputDate = styled.input<StyledComponentProps>`
  margin-bottom: 10px;
  border: ${(props) => props.theme.defaultBorder};
  border-radius: 5px;
  width: 200px;
  padding-left: 25px;
  padding-right: 25px;
  height: 30px;
  font-size: 15px;
  font-family: ${(props) => props.theme.globalFont};
  color: ${(props) =>
    props.isnotvalid === 'true' ? props.theme.isNotValid : props.theme.controlPanelColor};
  border-color: ${(props) =>
    props.isnotvalid === 'true' ? props.theme.isNotValid : props.theme.inputEmpty};
  animation: ${(props) => (props.isnotvalid === 'true' ? 'shake 10s infinite' : 'none')};
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    1% {
      transform: translateX(-10px);
    }
    2% {
      transform: translateX(10px);
    }
    3% {
      transform: translateX(-10px);
    }
    4% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
