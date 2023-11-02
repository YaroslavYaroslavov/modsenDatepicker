import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  isNext: boolean;
  callback: () => void;
}
type StyledComponentProps = {
  isnext: string;
};

const ButtonStyled = styled.button<StyledComponentProps>`
  border: none;
  color: black;
  width: 25px;
  height: 25px;
  background-color: transparent;
  &:hover {
    color: white;
    background-color: #277bec;
  }
  border-radius: ${(props) =>
    props.isnext === 'true' ? '0 10px 10px 0' : '10px 0 0 10px'};
`;

export const Button: FC<ButtonProps> = ({ isNext, callback }) => {
  return (
    <ButtonStyled isnext={isNext.toString()} onClick={callback}>
      {isNext ? '»' : '«'}
    </ButtonStyled>
  );
};
