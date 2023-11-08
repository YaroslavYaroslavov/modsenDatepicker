import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.theme.containerWidth};
  flex-wrap: nowrap;
  margin-top: 10px;
`;
export const ButtonAdd = styled.button`
  border: none;
  background-color: ${(props) => props.theme.background};
  font-family: ${(props) => props.theme.globalFont};
  font-size: 15px;
  width: 45px;
  height: 100%;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colorHoverControl};
    background-color: ${(props) => props.theme.backgroundColorHoverControl};
  }
`;

export const ButtonDelete = styled.button`
  border: none;
  background-color: ${(props) => props.theme.background};
  font-family: ${(props) => props.theme.globalFont};
  border-radius: 7px;
  height: 40px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colorHoverControl};
    background-color: ${(props) => props.theme.backgroundColorHoverControl};
  }
`;

export const InputAddTask = styled.input`
  width: 150px;
  height: 100%;
  box-sizing: border-box;
`;

export const TaskWrapper = styled.div`
  ${centerByFlex}
`;

export const TaskBody = styled.p`
  font-family: ${(props) => props.theme.globalFont};
  width: 100px;
  word-break: break-all;
`;

export const InputTaskContainer = styled.div`
  height: 32px;
  margin-top: 10px;
  gap: 20px;
  ${centerByFlex}
`;
