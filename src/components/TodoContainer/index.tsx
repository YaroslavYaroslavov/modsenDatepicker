import React, { FC, memo, useEffect, useRef, useState } from 'react';

import { Task, ToDoContainerProps } from './interfaces';
import {
  ButtonAdd,
  ButtonDelete,
  InputAddTask,
  InputTaskContainer,
  TaskBody,
  TaskContainer,
  TaskWrapper,
} from './styled';

export const ToDoContainer: FC<ToDoContainerProps> = memo(({ selectedDay }) => {
  ToDoContainer.displayName = 'ToDoContainer';
  const inputRef = useRef<HTMLInputElement>(null);
  const [allTodosFromLocaleStorage, setAllTodosFromLocaleStorage] = useState<Task[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Task[]>([]);

  useEffect(() => {
    const taskListString = localStorage.getItem('todoList');
    const taskListArray = taskListString ? JSON.parse(taskListString) : [];
    setAllTodosFromLocaleStorage(taskListArray);
  }, [selectedDay]);

  useEffect(() => {
    if (selectedDay) {
      setFilteredTodos(
        allTodosFromLocaleStorage.filter(
          (task: Task) => task.day === selectedDay.toLocaleDateString()
        )
      );
    }
  }, [allTodosFromLocaleStorage, selectedDay]);

  const handleAddTodo = (): void => {
    if (selectedDay && inputRef.current && inputRef.current.value) {
      const task: Task = {
        day: selectedDay.toLocaleDateString(),
        value: inputRef.current.value,
        id: Date.now(),
      };
      localStorage.setItem('todoList', JSON.stringify([...allTodosFromLocaleStorage, task]));

      setAllTodosFromLocaleStorage((prevState) => [...prevState, task]);
      inputRef.current.value = '';
    }
  };

  const handleDeleteTask = (taskId: number): void => {
    const updatedTodo = allTodosFromLocaleStorage.filter((task: Task) => task.id !== taskId);
    localStorage.setItem('todoList', JSON.stringify(updatedTodo));
    setAllTodosFromLocaleStorage(updatedTodo);
  };

  return (
    <>
      <InputTaskContainer>
        <InputAddTask placeholder="Task..." ref={inputRef} type="text" />
        <ButtonAdd onClick={handleAddTodo}>Add</ButtonAdd>
      </InputTaskContainer>
      <TaskWrapper>
        {filteredTodos.map((task: Task) => (
          <TaskContainer key={task.id}>
            <TaskBody>{task.value}</TaskBody>
            <div>
              <input type="checkbox" />
              <ButtonDelete onClick={handleDeleteTask.bind(this, task.id)}>Delete</ButtonDelete>
            </div>
          </TaskContainer>
        ))}
      </TaskWrapper>
    </>
  );
});
