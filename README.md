# DatePicker Library

This library provides a customizable calendar and date picker components.

## Installation

You can install the package via npm:

`bash npm install jaroslawik-datepicker2 `

## Usage

````jsx
import CalendarService from "jaroslawik-datepicker2";

const MyCalendar = CalendarService.getCustomizeCalendar();
const MyCalendarWithDatePicker = CalendarService.getCalendarWithDatePicker();
const MyCalendarWithRangePicker = CalendarService.getCalendarWithRangePicker();

function App() { return ( <div className="App">
    <MyCalendar startOnMonday={false} />
    <MyCalendarWithDatePicker withTodos={true} />
    <MyCalendarWithRangePicker maxCalendarYear={2033} minCalendarYear={2000} />
</div> );
  }

export default App; ```

## Props

### `MyCalendar`

`maxCalendarYear`: The maximum year available in the calendar. (Number)
`minCalendarYear`: The minimum year available in the calendar. (Number)
`startOnMonday`: Specifies whether the calendar should start on Monday. (Boolean)
`withTodos`: Specifies whether the date picker should include todo items. (Boolean)
`defaultMonth`: Default selected month (Number)
`defaultYear`: Default selected Year (Number)
`defaultCalendarView`: Default Calendar view ('week' | 'month' | 'months' | 'years')

### `MyCalendarWithDatePicker`

`selectedDay`: The default selected day in Calendar (Date)

### `MyCalendarWithRangePicker`

`selectedFirstDay` The default first selected day in rangepicker (Date)
`selectedSecondDay` The default second selected day in rangepicker (Date)

````
