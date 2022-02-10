import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import garbageList from "./garbageList";

const localizer = momentLocalizer(moment);

const garbageCalendar = (props) => (
  <div>

        <Calendar
          localizer={localizer}
          events={garbageList}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          views={['month']}
          eventPropGetter={(event) => {
            const eventData = garbageList.find((ot) => ot.id === event.id);
            const backgroundColor = eventData && eventData.color;

            return { style: { backgroundColor } };
          }}
          style={{ height: 500 }}
        />
      </div>
);

export default garbageCalendar;
