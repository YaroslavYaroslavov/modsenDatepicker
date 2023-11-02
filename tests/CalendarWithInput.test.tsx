import React from 'react';
import {
  render,
  fireEvent,
  getByPlaceholderText,
} from '@testing-library/react';

import { Calendar } from '../src/components/Calendar';
import { withInput } from '../src/components/HOCs/withInput';

const MyCalendar = withInput(Calendar);

describe('CalendarWithInptut', () => {
  it('Рендер с инпутом.', () => {
    const { getByPlaceholderText } = render(
      <MyCalendar selectedDay={new Date(1698883200000)} />
    );
    const input = getByPlaceholderText('dd-mm-yyyy');

    expect(input).toBeInTheDocument();
  });
  it('Ввод в инпут валидной даты', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar selectedDay={new Date(1698883200000)} />
    );
    const input = getByPlaceholderText('dd-mm-yyyy');
    fireEvent.change(input, {
      target: {
        value: '1-12-2023',
      },
    });
    const title = getByText('December 2023');
    expect(title).toBeInTheDocument();
  });
  it('Клик по клетке', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar selectedDay={new Date(1698883200000)} />
    );
    const cell = getByText('15');
    const input: HTMLInputElement = getByPlaceholderText('dd-mm-yyyy');
    fireEvent.click(cell);

    expect(input.value).toBe('15-11-2023');
  });
  it('Открытие TodoList', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar withTodos={true} selectedDay={new Date(1698883200000)} />
    );
    const cell = getByText('15');
    fireEvent.click(cell);
    fireEvent.click(cell);
    const input: HTMLInputElement = getByPlaceholderText('Task...');

    expect(input).toBeInTheDocument();
  });
  it('Добавление и удаление задачи', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar withTodos={true} selectedDay={new Date(1698883200000)} />
    );
    const cell = getByText('15');
    fireEvent.click(cell);
    fireEvent.click(cell);
    const input: HTMLInputElement = getByPlaceholderText('Task...');
    fireEvent.change(input, {
      target: {
        value: 'some task',
      },
    });
    const addBtn = getByText('Add');
    fireEvent.click(addBtn);
    const task = getByText('some task');
    expect(task).toBeInTheDocument();
    const deleteBtn = getByText('Delete');
    fireEvent.click(deleteBtn);
    expect(task).not.toBeInTheDocument();
  });
});
