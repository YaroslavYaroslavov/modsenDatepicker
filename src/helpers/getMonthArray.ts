export function getMonthArray(
    month: number,
    year: number,
    startOnMonday: boolean
): { date: Date; isCurrentMonth: boolean }[][] {
    const daysInMonth = new Date(year, month, 0).getDate();
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

        if (week === 0) {
            for (let day = 0; day < 7; day++) {
                if (day >= firstDay) {
                    weekArray.push({
                        date: new Date(year, month, currentDay),
                        isCurrentMonth: true,
                    });
                    currentDay++;
                } else {
                    const previousMonthDays = new Date(year, month, 0).getDate();
                    weekArray.push({
                        date: new Date(
                            year,
                            month - 1,
                            previousMonthDays - (firstDay - day - 1)
                        ),
                        isCurrentMonth: false,
                    });
                }
            }
        } else {
            for (let day = 0; day < 7; day++) {
                if (currentDay <= daysInMonth) {
                    weekArray.push({
                        date: new Date(year, month, currentDay),
                        isCurrentMonth: true,
                    });
                    currentDay++;
                } else {
                    weekArray.push({
                        date: new Date(year, month + 1, currentDay - daysInMonth),
                        isCurrentMonth: false,
                    });
                    currentDay++;
                }
            }
        }
        result.push(weekArray);
    }

    return result;
}
