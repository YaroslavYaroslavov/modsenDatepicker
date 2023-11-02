import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  flex-wrap: nowrap;
  margin-top: 10px;
  p {
    font-family: Arial, Helvetica, sans-serif;
    width: 150px;
    max-width: 250px;
    word-break: break-all;
  }
  input {
    width: 45px;
  }
  button {
    border: none;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #317cf0;
    }
  }
  div {
    width: 56px;
    display: flex;
  }
`;
const InputTaskContainer = styled.div`
  align-items: center;
  justify-content: center;
  input {
    margin-top: 10px;
    width: 100px;
  }
  button {
    border: none;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    width: 45px;
    height: 32px;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #317cf0;
    }
  }
`;

interface Task {
  day: string;
  value: string;
  id: number;
}

interface ToDoContainerProps {
  selectedDay?: Date;
}

export const ToDoContainer: FC<ToDoContainerProps> = ({ selectedDay }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<Task[]>([]);
  const [todoToRender, setTodoToRender] = useState<Task[]>([]);

  useEffect(() => {
    const taskListString = localStorage.getItem('todoList');
    const taskListArray = taskListString ? JSON.parse(taskListString) : [];
    setTodo(taskListArray);
  }, [selectedDay]);

  useEffect(() => {
    if (selectedDay) {
      setTodoToRender(
        todo.filter(
          (task: Task) => task.day === selectedDay.toLocaleDateString()
        )
      );
    }
  }, [todo, selectedDay]);

  const handleAddTodo = (): void => {
    if (selectedDay && inputRef.current && inputRef.current.value) {
      const task: Task = {
        day: selectedDay.toLocaleDateString(),
        value: inputRef.current.value,
        id: Date.now(),
      };
      localStorage.setItem('todoList', JSON.stringify([...todo, task]));

      setTodo((prevState) => [...prevState, task]);
    }
  };

  const handleDeleteTask = (taskId: number): void => {
    const updatedTodo = todo.filter((task: Task) => task.id !== taskId);
    localStorage.setItem('todoList', JSON.stringify(updatedTodo));
    setTodo(updatedTodo);
  };

  return (
    <div>
      <InputTaskContainer>
        <input placeholder="Task..." ref={inputRef} type="text" />
        <button onClick={handleAddTodo}>Add</button>
      </InputTaskContainer>
      <div>
        {todoToRender.map((task: Task) => (
          <TaskContainer key={task.id}>
            <p>{task.value}</p>
            <div>
              <input type="checkbox" />
              <button
                onClick={() => {
                  handleDeleteTask(task.id);
                }}
              >
                Delete
              </button>
            </div>
          </TaskContainer>
        ))}
      </div>
    </div>
  );
};
