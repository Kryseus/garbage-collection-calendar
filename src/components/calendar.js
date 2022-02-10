import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
const myEventsList = [
	{
		'title': 'All Day Event',
		'allDay': true,
		'start': new Date(2015, 3, 0),
		'end': new Date(2015, 3, 0)
	},
	{
		'title': 'Long Event',
		'start': new Date(2015, 3, 7),
		'end': new Date(2015, 3, 10)
	}
]

const garbageCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default garbageCalendar;
