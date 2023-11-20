type Day = { date: Date; isCurrentMonth: boolean }[][];

export function getMonthArray(month: number, year: number, startOnMonday: boolean): Day {
  const DAYS_IN_WEEK = 7;
  const WEEKS_IN_MONTH = 6;

  let firstDay = new Date(Date.UTC(year, month, 1, 0)).getUTCDay();

  if (startOnMonday) {
    firstDay = firstDay === 0 ? 6 : firstDay - 1;
  }

  const result: Day = Array.from({ length: WEEKS_IN_MONTH }, (_, week) => {
    return Array.from({ length: DAYS_IN_WEEK }, (_, day) => {
      const dayOffset = week * DAYS_IN_WEEK + day;
      const currentDate = new Date(Date.UTC(year, month, dayOffset + 2 - firstDay, -6));
      const isCurrentMonth = currentDate.getUTCMonth() === month;

      return { date: currentDate, isCurrentMonth };
    });
  });

  return result;
}
