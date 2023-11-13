import { centerByFlex } from 'constants/reuseStyles';
import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-wrap: nowrap;
  margin-top: 10px;

  width: ${({ theme }) => theme.containerWidth};
`;
export const ButtonAdd = styled.button`
  border: none;
  font-size: 15px;
  width: 45px;
  height: 100%;
  border-radius: 7px;
  cursor: pointer;

  font-family: ${({ theme }) => theme.globalFont};

  background-color: ${({ theme }) => theme.background};

  &:hover {
    color: ${({ theme }) => theme.colorHoverControl};

    background-color: ${({ theme }) => theme.backgroundColorHoverControl};
  }
`;

export const ButtonDelete = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.globalFont};
  border-radius: 7px;
  height: 40px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorHoverControl};

    background-color: ${({ theme }) => theme.backgroundColorHoverControl};
  }
`;

export const InputAddTask = styled.input`
  width: 150px;
  height: 100%;
  box-sizing: border-box;
`;

export const TaskWrapper = styled.div`
  ${centerByFlex}

  flex-direction: column;
`;

export const TaskBody = styled.p`
  font-family: ${({ theme }) => theme.globalFont};
  width: 100px;
  word-break: break-all;
`;

export const InputTaskContainer = styled.div`
  ${centerByFlex}

  height: 32px;
  margin-top: 10px;
  gap: 20px;
`;
