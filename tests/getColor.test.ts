import { getColor } from '../src/helpers/getColor';
import { theme } from 'constants/theme';

test('Get color', () => {
  expect(getColor('true', 'true', 'true', 'true', 'true')).toBe(theme.colorIsSelected);
});
test('Get color', () => {
  expect(getColor('false', 'true', 'true', 'true', 'true')).toBe(theme.colorToday);
});
test('Get color', () => {
  expect(getColor('false', 'false', 'true', 'true', 'true')).toBe(theme.colorHoliday);
});
test('Get color', () => {
  expect(getColor('false', 'false', 'false', 'true', 'true')).toBe(theme.colorWeekend);
});
test('Get color', () => {
  expect(getColor('false', 'false', 'false', 'false', 'true')).toBe(theme.colorCurrentMonth);
});
test('Get color', () => {
  expect(getColor('false', 'false', 'false', 'false', 'fasle')).toBe(theme.colorOtherMonth);
});
