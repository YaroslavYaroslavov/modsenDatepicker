import { getMonthArray } from '../src/helpers/getMonthArray';

test('Получаем месяц с  началом недели с понедельника', () => {
  expect(getMonthArray(10, 2023, true)).toStrictEqual([
    [
      { date: new Date('2023-10-29T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-10-30T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-10-31T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-01T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-02T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-03T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-04T21:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-05T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-06T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-07T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-08T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-09T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-10T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-11T21:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-12T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-13T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-14T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-15T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-16T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-17T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-18T21:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-19T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-20T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-21T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-22T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-23T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-24T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-25T21:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-26T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-27T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-28T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-29T21:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-30T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-01T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-02T21:00:00.000Z'), isCurrentMonth: false },
    ],
    [
      { date: new Date('2023-12-03T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-04T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-05T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-06T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-07T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-08T21:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-09T21:00:00.000Z'), isCurrentMonth: false },
    ],
  ]);
});
