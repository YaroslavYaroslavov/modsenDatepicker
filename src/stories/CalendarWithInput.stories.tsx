import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'components/Calendar';
import { withInput } from 'components/HOCs/withInput';

const CalendarWithInput = withInput(Calendar);

const meta: Meta<typeof CalendarWithInput> = {
  component: CalendarWithInput,
};

export default meta;

type Story = StoryObj<typeof CalendarWithInput>;

export const Default: Story = {
  name: 'Calendar with input',
  args: {},
};
export const Week: Story = {
  name: 'Calendar week view',
  args: {
    defaultCalendarView: 'week',
  },
};
export const Month: Story = {
  name: 'Calendar month view',
  args: {
    defaultCalendarView: 'month',
  },
};
export const Months: Story = {
  name: 'Calendar months view',
  args: {
    defaultCalendarView: 'months',
  },
};
export const Years: Story = {
  name: 'Calendar months view',
  args: {
    defaultCalendarView: 'years',
  },
};
export const WithTodos: Story = {
  name: 'Calendar WithTodos view',
  args: {
    defaultCalendarView: 'month',
    withTodos: true,
  },
};
export const WithPreSelectedDay: Story = {
  name: 'Calendar WithPreSelectedDay view',
  args: {
    selectedDay: new Date(0),
  },
};
