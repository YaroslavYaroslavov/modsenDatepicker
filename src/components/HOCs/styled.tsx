import { cellParams, centerByFlexColumn } from 'constants/reuseStyles';
import styled from 'styled-components';

type StyledComponentProps = {
  isnotvalid?: string;
};

export const ClearButton = styled.button`
  width: 100%;
  margin: 0;
  height: 25px;
  border-radius: 0 0 7px 7px;
  background-color: ${({ theme }) => theme.colorHoverControl};
  border: ${({ theme }) => theme.defaultBorder};
  border-top: 0px;
  height: 40px;
  font-family: ${({ theme }) => theme.globalFont};
  &:hover {
    color: ${({ theme }) => theme.backgroundColorHoverCell};
    background-color: ${({ theme }) => theme.backgroundColorHoverControl};
  }
`;
export const WithDatePicker = styled.div`
  ${centerByFlexColumn}

  width: ${({ theme }) => theme.containerWidth};
`;
export const InputDate = styled.input<StyledComponentProps>`
  margin-bottom: 10px;
  border-radius: 5px;
  width: 200px;
  padding: 0 25px;

  ${cellParams}

  border: ${({ theme }) => theme.defaultBorder};

  font-family: ${({ theme }) => theme.globalFont};

  color: ${({ theme, isnotvalid }) =>
    isnotvalid === 'true' ? theme.isNotValid : theme.controlPanelColor};

  border-color: ${({ theme, isnotvalid }) =>
    isnotvalid === 'true' ? theme.isNotValid : theme.inputEmpty};

  animation: ${({ isnotvalid }) => (isnotvalid === 'true' ? 'shake 10s infinite' : 'none')};

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
