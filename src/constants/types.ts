export type CalendarView = 'week' | 'month' | 'months' | 'years';
export interface CalendarProps {
  startOnMonday?: boolean;
  defaultCalendarView?: CalendarView;
  defaultMonth?: number;
  defaultYear?: number;
  withTodos?: boolean;
  maxCalendarYear?: number;
  minCalendarYear?: number;
}
