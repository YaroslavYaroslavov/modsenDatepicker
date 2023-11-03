import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Calendar } from '../src/components/Calendar';

describe('Calendar', () => {
  it('Рендер с заданным днем.', () => {
    const { getByText } = render(
      <Calendar selectedDay={new Date(1698883200000)} />
    );
    const title = getByText('November 2023');

    expect(title).toBeInTheDocument();
  });
  it('Переключение месяца на следующий', () => {
    const { getByText } = render(
      <Calendar selectedDay={new Date(1698883200000)} />
    );
    const nextButton = getByText('»');
    fireEvent.click(nextButton);
    const title = getByText('December 2023');
    expect(title).toBeInTheDocument();
  });
  it('Переключение месяца на предыдущий', () => {
    const { getByText } = render(
      <Calendar selectedDay={new Date(1698883200000)} />
    );
    const nextButton = getByText('«');
    fireEvent.click(nextButton);
    const title = getByText('October 2023');
    expect(title).toBeInTheDocument();
  });
  it('Переключение вида календаря', () => {
    const { getByText } = render(
      <Calendar selectedDay={new Date(1698883200000)} />
    );
    const title = getByText('November 2023');
    fireEvent.click(title);
    const yearTitle = getByText('2023');
    expect(yearTitle).toBeInTheDocument();
    fireEvent.click(yearTitle);
    const decadeTitle = getByText('2020 - 2029');
    expect(decadeTitle).toBeInTheDocument();
  });
  it('Переключение даты ', () => {
    const { getByText } = render(
      <Calendar selectedDay={new Date(1698883200000)} />
    );
    const title = getByText('November 2023');
    fireEvent.click(title);
    const yearTitle = getByText('2023');
    fireEvent.click(yearTitle);
    const yeatBtn = getByText('2020');
    fireEvent.click(yeatBtn);
    const monthBtn = getByText('November');
    fireEvent.click(monthBtn);
    const newTitle = getByText('November 2020');
    expect(newTitle).toBeInTheDocument();
  });
  it('Кнопка переключение скрывается при достижении нижнего граничного года', () => {
    const { getByText } = render(
      <Calendar selectedDay={new Date(1698883200000)} minCalendarYear={2022} />
    );
    const title = getByText('November 2023');
    fireEvent.click(title);
    const prevButton = getByText('«');
    fireEvent.click(prevButton);

    expect(prevButton).not.toBeInTheDocument();
  });
  it('Кнопка переключение скрывается при достижении верхнего граничного года', () => {
    const { getByText } = render(
      <Calendar selectedDay={new Date(1698883200000)} maxCalendarYear={2024} />
    );
    const title = getByText('November 2023');
    fireEvent.click(title);
    const nextButton = getByText('»');
    fireEvent.click(nextButton);

    expect(nextButton).not.toBeInTheDocument();
  });
});
