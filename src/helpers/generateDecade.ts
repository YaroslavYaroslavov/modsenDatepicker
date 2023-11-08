const yearsToEndDecade = 9;
const yearsInDecade = 10;

export function generateDecade(
  minCalendarYear: number,
  maxCalendarYear: number,
  year: number
): number[] {
  const decadeStart = Math.floor(year / yearsInDecade) * yearsInDecade;
  const decadeEnd = decadeStart + yearsToEndDecade;
  const startYear = Math.max(decadeStart, minCalendarYear);
  const endYear = Math.min(decadeEnd, maxCalendarYear);

  const decadeYears = [];
  for (let i = startYear; i <= endYear; i++) {
    decadeYears.push(i);
  }

  return decadeYears;
}
