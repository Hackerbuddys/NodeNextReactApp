import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      start: new Date("2023-11-10T10:00:00"),
      end: new Date("2023-11-10T12:00:00"),
    },
    {
      id: 2,
      title: "Event 2",
      start: new Date("2023-11-15T14:00:00"),
      end: new Date("2023-11-15T16:00:00"),
    },
  ]);

  return (
    <div className="container my-5">
      {/* <h1 className="text-center mb-4"> Compliance Calendar</h1> */}
      <div className="row">
        <div className="col">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 580 }}
          />
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
