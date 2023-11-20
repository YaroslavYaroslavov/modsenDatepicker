import { getBorderRadius } from '../src/helpers/getBorderRadius';

test('Get radius', () => {
  expect(getBorderRadius('true', 'true', 'true')).toBe('10px 0 0 10px');
});
test('Get radius', () => {
  expect(getBorderRadius('false', 'true', 'true')).toBe('0 10px 10px 0');
});
test('Get radius', () => {
  expect(getBorderRadius('false', 'false', 'true')).toBe('0px');
});
test('Get radius', () => {
  expect(getBorderRadius('false', 'false', 'false')).toBe('10px');
});
