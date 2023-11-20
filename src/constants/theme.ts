const lightBlue = '#3080ea';
const black = '#000000';
const white = '#ffffff';
const red = '#ff0000';

const fontStyles = {
  globalFont: 'Arial, Helvetica, sans-serif',
  fontSizeCell: '15px',
  fontSizeTitle: '15px',
};
const fontColors = {
  colorHoliday: '#990089',
  colorOtherMonth: '#7e7e7e ',
  colorWeekend: red,
  colorToday: lightBlue,
  controlPanelColor: black,
  colorCurrentMonth: black,
  colorIsSelected: white,
  colorHoverCell: lightBlue,
  colorHoverControl: white,
  isNotValid: red,
};

const cellColors = {
  backgroundColorSelected: lightBlue,
  controlPanelColorBackground: 'transparent',
  backgroundColorFirstSelected: '#82b3f5',
  backgroundColorSecondSelected: lightBlue,
  backgroundColorBetweenSelected: '#ebf3fe',
  backgroundColorHoverControl: lightBlue,
  backgroundColorHoverCell: '#eff0ec',
  inputEmpty: '#808080',
};

const containerStyles = {
  defaultBorder: '1px solid grey',

  containerWidth: '250px',
};
export const theme = {
  ...fontStyles,
  ...fontColors,
  ...cellColors,
  ...containerStyles,
};
