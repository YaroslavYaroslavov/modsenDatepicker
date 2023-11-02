import React from 'react';
import {
  render,
  fireEvent,
  getByPlaceholderText,
} from '@testing-library/react';

import { Calendar } from '../src/components/Calendar';
import { withInputs } from '../src/components/HOCs/withInputs';

const MyCalendar = withInputs(Calendar);

describe('CalendarWithInptut', () => {
  it('Рендер с инпутами.', () => {
    const { getAllByPlaceholderText } = render(<MyCalendar />);
    const inputArr = getAllByPlaceholderText('dd-mm-yyyy');

    expect(inputArr.length).toBe(2);
  });
  it('Рендер с заданным рейнджем', () => {
    const { getByText } = render(
      <MyCalendar
        selectedFirstDay={new Date(1698883200000)}
        selectedSecondDay={new Date(1699228800000)}
      />
    );

    const title = getByText('November 2023');
    expect(title).toBeInTheDocument();
  });
});
