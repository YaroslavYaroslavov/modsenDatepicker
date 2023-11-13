type Day = { date: Date; isCurrentMonth: boolean }[][];

export function getMonthArray(month: number, year: number, startOnMonday: boolean): Day {
  const DAYS_IN_WEEK = 7;
  const WEEKS_IN_MONTH = 6;
  const TIMEZONE_OFFSET = -3;

  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  let firstDay = new Date(Date.UTC(year, month, 1)).getUTCDay();
  let currentDay = 1;

  if (startOnMonday) {
    const SUNDAY = 0;
    const SATURDAY = 6;

    if (firstDay === SUNDAY) {
      firstDay = SATURDAY;
    } else {
      firstDay--;
    }
  }

  const result: Day = [];

  for (let week = 0; week < WEEKS_IN_MONTH; week++) {
    const weekArray: { date: Date; isCurrentMonth: boolean }[] = [];

    for (let day = 0; day < DAYS_IN_WEEK; day++) {
      let currentDate: Date;
      let isCurrentMonth: boolean;

      if (week === 0 && day < firstDay) {
        const previousMonthDays = new Date(Date.UTC(year, month, 0)).getUTCDate();
        currentDate = new Date(Date.UTC(year, month - 1, previousMonthDays - (firstDay - day - 1)));
        isCurrentMonth = false;
      } else if (currentDay <= daysInMonth) {
        currentDate = new Date(Date.UTC(year, month, currentDay));
        isCurrentMonth = true;
        currentDay++;
      } else {
        currentDate = new Date(Date.UTC(year, month + 1, currentDay - daysInMonth));
        isCurrentMonth = false;
        currentDay++;
      }

      currentDate.setUTCHours(currentDate.getUTCHours() + TIMEZONE_OFFSET);
      weekArray.push({ date: currentDate, isCurrentMonth });
    }

    result.push(weekArray);
  }

  return result;
}
