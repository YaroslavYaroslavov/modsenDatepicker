import { render } from '@testing-library/react';
import React from 'react';
import { Calendar } from '../src/components/Calendar';
import { withRangePicker } from '../src/components/HOCs/withRangePicker';

const MyCalendar = withRangePicker(Calendar);

describe('CalendarWithInptut', () => {
  it('Render with inputs', () => {
    const { getAllByPlaceholderText } = render(<MyCalendar />);
    const inputArr = getAllByPlaceholderText('dd.mm.yyyy');

    expect(inputArr.length).toBe(2);
  });
  it('Render with selected range', () => {
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
