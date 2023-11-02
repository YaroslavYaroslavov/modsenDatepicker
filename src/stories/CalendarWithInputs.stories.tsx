import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'components/Calendar';
import { withInputs } from 'components/HOCs/withInputs';

const CalendarWithInputs = withInputs(Calendar);

const meta: Meta<typeof CalendarWithInputs> = {
  component: CalendarWithInputs,
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
  name: 'Calendar years view',
  args: {
    defaultCalendarView: 'years',
  },
};
export const WithDefaultSelected: Story = {
  name: 'Calendar WithDefaultSelected view',
  args: {
    selectedFirstDay: new Date(1698352426000),
    selectedSecondDay: new Date(1698958226000),
  },
};
