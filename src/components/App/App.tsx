import { Calendar } from 'components/Calendar';
import { withInputs } from 'components/HOCs/withInputs';
import React from 'react';
const MyCalendar = withInputs(Calendar);
export const App = () => {
  return <MyCalendar />;
};
