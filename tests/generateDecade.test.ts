import { generateDecade } from '../src/helpers/generateDecade';

test('Получаем декаду', () => {
  expect(generateDecade(1000, 9999, 2005)).toStrictEqual([
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  ]);
});
test('Получаем декаду c ограничением максимального года', () => {
  expect(generateDecade(1000, 2006, 2005)).toStrictEqual([
    2000, 2001, 2002, 2003, 2004, 2005, 2006,
  ]);
});
test('Получаем декаду c ограничением минимального года', () => {
  expect(generateDecade(2003, 9999, 2005)).toStrictEqual([
    2003, 2004, 2005, 2006, 2007, 2008, 2009,
  ]);
});
test('Получаем декаду c ограничением минимального и максимального года', () => {
  expect(generateDecade(2003, 2006, 2005)).toStrictEqual([
    2003, 2004, 2005, 2006,
  ]);
});
