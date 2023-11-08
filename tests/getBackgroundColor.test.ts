import { getBackgroundColor } from '../src/helpers/getBackgroundColor';
import { theme } from 'constants/theme';

test('Get color', () => {
  expect(getBackgroundColor('true', 'true', 'true', 'true')).toBe(
    theme.backgroundColorFirstSelected
  );
});
test('Get color', () => {
  expect(getBackgroundColor('false', 'true', 'true', 'true')).toBe(
    theme.backgroundColorSecondSelected
  );
});
test('Get color', () => {
  expect(getBackgroundColor('false', 'false', 'true', 'true')).toBe(
    theme.backgroundColorBetweenSelected
  );
});
test('Get color', () => {
  expect(getBackgroundColor('false', 'false', 'false', 'true')).toBe(theme.backgroundColorSelected);
});
test('Get color', () => {
  expect(getBackgroundColor('false', 'false', 'false', 'false')).toBe('transparent');
});
