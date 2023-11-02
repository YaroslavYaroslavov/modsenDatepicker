import styled from 'styled-components';

type StyledComponentProps = {
  isnotvalid?: string;
};

export const ClearButton = styled.button`
  width: 100%;
  height: 25px;
  margin: 0;
  border-radius: 0 0 7px 7px;
  background-color: white;
  border: 1px solid grey;
  border-top: 0px;
  height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: white;
    background-color: #277bec;
  }
`;
export const WithInput = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  input {
    margin-bottom: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    width: 200px;
    padding-left: 25px;
    padding-right: 25px;
    height: 30px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props) => (props.isnotvalid === 'true' ? 'red' : 'black')};
    border-color: ${(props) => (props.isnotvalid === 'true' ? 'red' : 'grey')};
  }
`;
