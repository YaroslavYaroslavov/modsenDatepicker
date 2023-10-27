import React from 'react';
import { Calendar } from 'components/Calendar';
import { withInput } from 'components/HOCs/withInput';

const CalendarWithInput = withInput(Calendar);

export const App = () => {
  return (
    <h1>
      <Calendar />
      <CalendarWithInput />
    </h1>
  );
};
