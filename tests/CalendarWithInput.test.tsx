import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Calendar } from '../src/components/Calendar';
import { withDatePicker } from '../src/components/HOCs/withDatePicker';

const MyCalendar = withDatePicker(Calendar);

describe('CalendarWithInptut', () => {
  it('Render with input.', () => {
    const { getByPlaceholderText } = render(<MyCalendar selectedDay={new Date(1698883200000)} />);
    const input = getByPlaceholderText('dd.mm.yyyy');

    expect(input).toBeInTheDocument();
  });
  it('Input valid date', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar selectedDay={new Date(1698883200000)} />
    );
    const input = getByPlaceholderText('dd.mm.yyyy');
    fireEvent.change(input, {
      target: {
        value: '1.12.2023',
      },
    });
    const title = getByText('December 2023');
    expect(title).toBeInTheDocument();
  });
  it('Click on cell', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar selectedDay={new Date(1698883200000)} />
    );
    const cell = getByText('15');
    const input: HTMLElement = getByPlaceholderText('dd.mm.yyyy');
    fireEvent.click(cell);

    expect((input as HTMLInputElement).value).toBe('15.11.2023');
  });
  it('Open todolist', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar withTodos={true} selectedDay={new Date(1698883200000)} />
    );
    const cell = getByText('15');
    fireEvent.click(cell);
    fireEvent.click(cell);
    const input: HTMLElement = getByPlaceholderText('Task...');

    expect(input).toBeInTheDocument();
  });
  it('Add and delete tsk', () => {
    const { getByText, getByPlaceholderText } = render(
      <MyCalendar withTodos={true} selectedDay={new Date(1698883200000)} />
    );
    const cell = getByText('15');
    fireEvent.click(cell);
    fireEvent.click(cell);
    const input: HTMLElement = getByPlaceholderText('Task...');
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
