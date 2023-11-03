import { getMonthArray } from '../src/helpers/getMonthArray';

test('Получаем месяц с  началом недели с понедельника', () => {
  expect(getMonthArray(10, 2023, true)).toStrictEqual([
    [
      { date: new Date('2023-10-29T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-10-30T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-10-31T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-01T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-02T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-03T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-04T00:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-05T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-06T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-07T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-08T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-09T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-10T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-11T00:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-12T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-13T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-14T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-15T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-16T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-17T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-18T00:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-19T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-20T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-21T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-22T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-23T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-24T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-25T00:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-26T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-27T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-28T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-29T00:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-30T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-01T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-02T00:00:00.000Z'), isCurrentMonth: false },
    ],
    [
      { date: new Date('2023-12-03T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-04T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-05T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-06T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-07T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-08T00:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-09T00:00:00.000Z'), isCurrentMonth: false },
    ],
  ]);
});
