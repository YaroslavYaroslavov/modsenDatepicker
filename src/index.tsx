import { Calendar } from 'components/Calendar';
import { getDefaultCalendar } from 'components/HOCs/defaultCalendar';
import { withDatePicker } from 'components/HOCs/withDatePicker';
import { withRangePicker } from 'components/HOCs/withRangePicker';

class CalendarService {
  static getCustomizeCalendar() {
    return getDefaultCalendar(Calendar);
  }
  static getCalendarWithDatePicker() {
    return withDatePicker(Calendar);
  }
  static getCalendarWithRangePicker() {
    return withRangePicker(Calendar);
  }
}

export default CalendarService;
