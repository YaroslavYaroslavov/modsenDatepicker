export function generateDecade(
  minCalendarYear: number,
  maxCalendarYear: number,
  year: number
): number[] {
  const decadeStart = Math.floor(year / 10) * 10;
  const decadeEnd = decadeStart + 9;
  const startYear = Math.max(decadeStart, minCalendarYear);
  const endYear = Math.min(decadeEnd, maxCalendarYear);

  const decadeYears = [];
  for (let i = startYear; i <= endYear; i++) {
    decadeYears.push(i);
  }

  return decadeYears;
}
