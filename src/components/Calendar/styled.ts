import { StyledComponentProps } from 'components/Calendar/interfaces';
import styled from 'styled-components';

export const CalendarContainer = styled.div<StyledComponentProps>`
  width: ${(props) => props.theme.containerWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${(props) => props.theme.defaultBorder};
  box-sizing: border-box;
  border-radius: ${(props) =>
    props.isclearbuttonvisible === 'false' ? '10px 10px 10px 10px' : '10px 10px 0 0'};
  padding-bottom: 10px;
`;
export const theme = {
  globalFont: 'Arial, Helvetica, sans-serif',
  controlPanelColor: '#000000',
  controlPanelColorBackground: 'transparent',
  fontSizeCell: '15px',
  fontSizeTitle: '15px',
  colorWeekend: '#ff0000',
  colorHoliday: '#990089',
  colorToday: '#3080ea',
  colorOtherMonth: '#7e7e7e ',
  colorCurrentMonth: '#000000',
  colorIsSelected: '#ffffff',
  backgroundColorSelected: '#3080ea',
  backgroundColorFirstSelected: '#82b3f5',
  backgroundColorSecondSelected: '#3080ea',
  backgroundColorBetweenSelected: '#ebf3fe',
  colorHoverControl: '#ffffff',
  backgroundColorHoverControl: '#3080ea',
  colorHoverCell: '#3080ea',
  backgroundColorHoverCell: '#eff0ec',
  isNotValid: '#ff0000',
  inputEmpty: '#808080',
  defaultBorder: '1px solid grey',
  containerWidth: '250px',
};
