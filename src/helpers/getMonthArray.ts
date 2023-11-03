type Day = { date: Date; isCurrentMonth: boolean }[][];

export function getMonthArray(
  month: number,
  year: number,
  startOnMonday: boolean
): Day {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay();
  let currentDay = 1;

  if (startOnMonday) {
    if (firstDay === 0) {
      firstDay = 6;
    } else {
      firstDay--;
    }
  }

  const result: { date: Date; isCurrentMonth: boolean }[][] = [];

  for (let week = 0; week < 6; week++) {
    const weekArray: { date: Date; isCurrentMonth: boolean }[] = [];

    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < firstDay) {
        const previousMonthDays = new Date(year, month, 0).getDate();
        const date = new Date(
          year,
          month - 1,
          previousMonthDays - (firstDay - day - 1)
        );
        date.setUTCHours(0, 0, 0, 0);
        weekArray.push({
          date: date,
          isCurrentMonth: false,
        });
      } else if (currentDay <= daysInMonth) {
        const date = new Date(year, month, currentDay);
        date.setUTCHours(0, 0, 0, 0);
        weekArray.push({
          date: date,
          isCurrentMonth: true,
        });
        currentDay++;
      } else {
        const date = new Date(year, month + 1, currentDay - daysInMonth);
        date.setUTCHours(0, 0, 0, 0);
        weekArray.push({
          date: date,
          isCurrentMonth: false,
        });
        currentDay++;
      }
    }

    result.push(weekArray);
  }

  return result;
}
