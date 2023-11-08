import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'components/Calendar';
import { getDefaultCalendar } from 'components/HOCs/defaultCalendar';

const MyCalendar = getDefaultCalendar(Calendar);

const meta: Meta<typeof MyCalendar> = {
  component: MyCalendar,
  argTypes: {
    defaultCalendarView: {
      options: ['week', 'month', 'months', 'years'],
      control: { type: 'radio' },
    },
    selectedDay: {
      options: [new Date(), new Date(2003, 6, 13), new Date(2004, 8, 17), undefined],
      control: { type: 'radio' },
    },
    selectedFirstDay: {
      options: [new Date(), new Date(2003, 6, 13), new Date(2004, 8, 17), undefined],
      control: { type: 'radio' },
    },
    selectedSecondDay: {
      options: [new Date(), new Date(2003, 6, 13), new Date(2004, 8, 17), undefined],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MyCalendar>;

export const Default: Story = {
  name: 'Custom Calendar',
  args: {
    defaultMonth: 0,
    defaultYear: 2023,
    minCalendarYear: 2000,
    maxCalendarYear: 4000,
    startOnMonday: true,
  },
};
