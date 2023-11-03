import { Calendar } from 'components/Calendar';
import { withInput } from 'components/HOCs/withInput';
import { withInputs } from 'components/HOCs/withInputs';

class CalendarService {
  static getDefaultCalendar() {
    return Calendar;
  }
  static withInput() {
    return withInput(Calendar);
  }
  static withInputs() {
    return withInputs(Calendar);
  }
}

export default CalendarService;
