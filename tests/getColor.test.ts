import { getColor } from '../src/helpers/getColor';
import { theme } from 'constants/theme';

test('Get color', () => {
  expect(getColor('true', 'true', 'true', 'true', 'true', '#990089')).toBe(theme.colorIsSelected);
});
test('Get color', () => {
  expect(getColor('false', 'true', 'true', 'true', 'true', '#990089')).toBe(theme.colorToday);
});
test('Get color', () => {
  expect(getColor('false', 'false', 'true', 'true', 'true', '#990089')).toBe(theme.colorHoliday);
});
test('Get color', () => {
  expect(getColor('false', 'false', 'false', 'true', 'true', '#990089')).toBe(theme.colorWeekend);
});
test('Get color', () => {
  expect(getColor('false', 'false', 'false', 'false', 'true', '#990089')).toBe(
    theme.colorCurrentMonth
  );
});
test('Get color', () => {
  expect(getColor('false', 'false', 'false', 'false', 'fasle', '#990089')).toBe(
    theme.colorOtherMonth
  );
});
