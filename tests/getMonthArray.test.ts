import { getMonthArray } from '../src/helpers/getMonthArray';

test('Get month array on start monday', () => {
  expect(getMonthArray(10, 2023, true)).toStrictEqual([
    [
      { date: new Date('2023-10-30T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-10-31T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-11-01T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-02T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-03T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-04T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-05T18:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-06T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-07T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-08T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-09T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-10T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-11T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-12T18:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-13T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-14T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-15T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-16T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-17T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-18T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-19T18:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-20T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-21T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-22T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-23T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-24T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-25T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-26T18:00:00.000Z'), isCurrentMonth: true },
    ],
    [
      { date: new Date('2023-11-27T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-28T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-29T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-11-30T18:00:00.000Z'), isCurrentMonth: true },
      { date: new Date('2023-12-01T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-02T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-03T18:00:00.000Z'), isCurrentMonth: false },
    ],
    [
      { date: new Date('2023-12-04T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-05T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-06T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-07T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-08T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-09T18:00:00.000Z'), isCurrentMonth: false },
      { date: new Date('2023-12-10T18:00:00.000Z'), isCurrentMonth: false },
    ],
  ]);
});
