import React from 'react';
import { Calendar } from 'components/Calendar';
import { withInput } from 'components/HOCs/withInput';

const CalendarWithInput = withInput(Calendar)

export default {
  title: 'CalendarWithInput',
  component: CalendarWithInput,
};

export const Default = () => <CalendarWithInput />;
