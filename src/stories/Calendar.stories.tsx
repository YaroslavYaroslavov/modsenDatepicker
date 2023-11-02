import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'components/Calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const WithStartOnMonday: Story = {
  name: 'WithStartOnSunday',
  args: {
    startOnMonday: false,
  },
};

export const WithDefaultDate: Story = {
  name: 'WithDefaultDate',
  args: {
    defaultMonth: 0,
    defaultYear: 2222,
  },
};

export const Default: Story = {
  name: 'Default Calendar',
  args: {
    startOnMonday: true,
    defaultCalendarView: 'month',
    defaultMonth: 11,
    defaultYear: 2022,
  },
};
export const Week: Story = {
  name: 'Calendar week view',
  args: {
    startOnMonday: true,
    defaultCalendarView: 'week',
    defaultMonth: 11,
    defaultYear: 2022,
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
