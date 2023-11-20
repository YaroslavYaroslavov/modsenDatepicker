export function updateYearAndMonth(
  selectedDate: Date,
  setYear: (year: number) => void,
  setMonth: (month: number) => void,
  maxCalendarYear: number,
  minCalendarYear: number,
  noDate: number
) {
  if (
    selectedDate &&
    selectedDate.getFullYear() <= maxCalendarYear &&
    selectedDate.getFullYear() >= minCalendarYear &&
    selectedDate?.getTime() !== noDate
  ) {
    setYear(selectedDate.getFullYear());
    setMonth(selectedDate.getMonth());
  }
}
