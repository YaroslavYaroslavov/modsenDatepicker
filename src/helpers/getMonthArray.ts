type Day = { date: Date; isCurrentMonth: boolean }[][];

export function getMonthArray(
  month: number,
  year: number,
  startOnMonday: boolean
): Day {
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  let firstDay = new Date(Date.UTC(year, month, 1)).getUTCDay();
  let currentDay = 1;

  if (startOnMonday) {
    if (firstDay === 0) {
      firstDay = 6;
    } else {
      firstDay--;
    }
  }

  const TIMEZONE_OFFSET = -3;

  const result: { date: Date; isCurrentMonth: boolean }[][] = [];

  for (let week = 0; week < 6; week++) {
    const weekArray: { date: Date; isCurrentMonth: boolean }[] = [];

    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < firstDay) {
        const previousMonthDays = new Date(
          Date.UTC(year, month, 0)
        ).getUTCDate();
        const previousMonthDate = new Date(
          Date.UTC(
            year,
            month - 1,
            previousMonthDays - (firstDay - day - 1),
            0,
            0,
            0
          )
        );
        previousMonthDate.setUTCHours(
          previousMonthDate.getUTCHours() + TIMEZONE_OFFSET
        );
        weekArray.push({
          date: previousMonthDate,
          isCurrentMonth: false,
        });
      } else if (currentDay <= daysInMonth) {
        const currentDate = new Date(
          Date.UTC(year, month, currentDay, 0, 0, 0)
        );
        currentDate.setUTCHours(currentDate.getUTCHours() + TIMEZONE_OFFSET);
        weekArray.push({
          date: currentDate,
          isCurrentMonth: true,
        });
        currentDay++;
      } else {
        const nextMonthDate = new Date(
          Date.UTC(year, month + 1, currentDay - daysInMonth, 0, 0, 0)
        );
        nextMonthDate.setUTCHours(
          nextMonthDate.getUTCHours() + TIMEZONE_OFFSET
        );
        weekArray.push({
          date: nextMonthDate,
          isCurrentMonth: false,
        });
        currentDay++;
      }
    }

    result.push(weekArray);
  }

  return result;
}
