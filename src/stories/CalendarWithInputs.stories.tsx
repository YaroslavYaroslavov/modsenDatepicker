import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'components/Calendar';
import { withRangePicker } from 'components/HOCs/withRangePicker';
import { monthsView, monthView, weekView, yearsView } from 'constants/calendarViews';

const CalendarWithInputs = withRangePicker(Calendar);

const meta: Meta<typeof CalendarWithInputs> = {
  component: CalendarWithInputs,
  argTypes: {
    defaultCalendarView: {
      options: [monthsView, monthView, weekView, yearsView],
      control: { type: 'radio' },
    },
    defaultSelectedFirstDay: {
      control: { type: 'radio' },
      options: ['today', '2003.7.13', '2004.9.17', 'noDate'],
      mapping: {
        today: new Date(),
        '2003.7.13': new Date(2003, 6, 13),
        '2004.9.17': new Date(2004, 8, 17),
        noDate: undefined,
      },
    },
    defaultSelectedSecondDay: {
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

type Story = StoryObj<typeof CalendarWithInputs>;

export const Default: Story = {
  name: 'Calendar with inputs',
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
  name: 'Calendar years view',
  args: {
    defaultCalendarView: yearsView,
  },
};
export const WithDefaultSelected: Story = {
  name: 'Calendar WithDefaultSelected view',
  args: {
    defaultSelectedFirstDay: new Date(1698352426000),
    defaultSelectedSecondDay: new Date(1698958226000),
  },
};
