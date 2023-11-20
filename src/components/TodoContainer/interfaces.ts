export interface Task {
  day: string;
  value: string;
  id: number;
}

export interface ToDoContainerProps {
  selectedDay?: Date;
}
