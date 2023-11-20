import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'components/Calendar';
import { withDatePicker } from 'components/HOCs/withDatePicker';
import { weekView, monthView, monthsView, yearsView } from 'constants/calendarViews';

const CalendarWithInput = withDatePicker(Calendar);

const meta: Meta<typeof CalendarWithInput> = {
  component: CalendarWithInput,
  argTypes: {
    defaultCalendarView: {
      options: [weekView, monthView, monthsView, yearsView],
      control: { type: 'radio' },
    },
    defaultSelectedDay: {
      options: ['today', '2003.7.13', '2004.9.17', 'noDate'],
      mapping: {
        today: new Date(),
        '2003.7.13': new Date(2003, 6, 13),
        '2004.9.17': new Date(2004, 8, 17),
        noDate: undefined,
      },
      control: { type: 'radio' },
    },
  },
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
    defaultCalendarView: weekView,
  },
};
export const Month: Story = {
  name: 'Calendar month view',
  args: {
    defaultCalendarView: monthView,
  },
};
export const Months: Story = {
  name: 'Calendar months view',
  args: {
    defaultCalendarView: monthsView,
  },
};
export const Years: Story = {
  name: 'Calendar months view',
  args: {
    defaultCalendarView: yearsView,
  },
};
export const WithTodos: Story = {
  name: 'Calendar WithTodos view',
  args: {
    defaultCalendarView: monthView,
    withTodos: true,
  },
};
export const WithPreSelectedDay: Story = {
  name: 'Calendar WithPreSelectedDay view',
  args: {
    defaultSelectedDay: new Date(0),
  },
};
