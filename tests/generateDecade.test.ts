import { generateDecade } from '../src/helpers/generateDecade';

test('Get decade', () => {
  expect(generateDecade(1000, 9999, 2005)).toStrictEqual([
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  ]);
});
test('Get decade with bound maximum year', () => {
  expect(generateDecade(1000, 2006, 2005)).toStrictEqual([
    2000, 2001, 2002, 2003, 2004, 2005, 2006,
  ]);
});
test('Get decade with bound minimum year', () => {
  expect(generateDecade(2003, 9999, 2005)).toStrictEqual([
    2003, 2004, 2005, 2006, 2007, 2008, 2009,
  ]);
});
test('Get decade with bound maximum and minumum year', () => {
  expect(generateDecade(2003, 2006, 2005)).toStrictEqual([2003, 2004, 2005, 2006]);
});
