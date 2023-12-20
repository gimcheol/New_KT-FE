import { Badge } from "reactstrap";

import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

import "../css/mycalendar.css";

const MyCalendar = () => {
    const dateClick = (info) => {
        alert(info.dateStr);
    };

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "today",
                    center: "title",
                    end: "prev,next",
                }}
                height="85vh"
                dateClick={dateClick}
            />
        </div>
    );
};

export default MyCalendar;
