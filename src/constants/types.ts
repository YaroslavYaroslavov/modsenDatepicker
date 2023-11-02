export type CalendaView = 'week' | 'month' | 'months' | 'years';
export interface CalendarProps {
  startOnMonday?: boolean;
  defaultCalendarView?: CalendaView;
  defaultMonth?: number;
  defaultYear?: number;
  withTodos?: boolean;
  maxCalendarYear?: number;
  minCalendarYear?: number;
}
