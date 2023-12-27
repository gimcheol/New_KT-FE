//mycalendar.jsx
import React, { useState } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

import AddEventModal from "./AddEventModal.jsx";
import EventModal from './EventModal.jsx';

import "../css/mycalendar.css";
import { info } from "sass";

const MyCalendar = () => {
    const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
    const [isEventModalOpen, setEventModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [events, setEvents] = useState([
        { id: 1, title: 'react1', date: ('2023-12-25'), meeting: true, keyword: 'react', summary: 'react를 공부합니다.'},
        { id:2, title: 'Meeting2', start: ('2023-12-30T12:00:00'), meeting: true, keyword: 'react', summary: 'react를 공부합니다.' },
        {
            id: 3,
            title: 'Test2',
            start: ('2023-12-05'),
            end: ('2023-12-07'),
            meeting: false,
            keyword: 'react',
            summary: 'react를 공부합니다.',
        },
        {id:4, title: '연습1', start: '2023-12-27', end: '2023-12-29', memo: '연습입니다!',
            meeting: true, keyword: '연습', summary: '연습 중'},
        {id:5, title: '연습2', start: '2023-12-27T23:10:00', end: '2023-12-27T23:17:00', memo: '연습22',
            meeting: false, keyword: '연습', summary: '연습 중'},
    ]);

    const handleAddButton=()=>{
        setAddEventModalOpen(true);
    }

    // 클릭한 이벤트의 정보를 모달에 표시
    const handleEventClick = (clickInfo) => {
        // 클릭한 이벤트의 정보를 가져와서 모달을 엽니다.
        const { event } = clickInfo;
        const eventId = parseInt(event._def.publicId);

        // 선택한 event를 찾아서 setSelectedEvent에 저장
        setSelectedEvent(events.find((event) => event.id === eventId));
        setEventModalOpen(true);
    };


    return (
        <div className="calendar">
            <FullCalendar
                locale="kr"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay addEventButton",
                }}

                customButtons={{
                    addEventButton: {
                        text: "Add",
                        click: handleAddButton,
                    },
                }}

                height={780}
                events={events}
                eventClick={handleEventClick}
            />

            <AddEventModal
                isOpen={isAddEventModalOpen}
                onClose={() => setAddEventModalOpen(false)}
                onSave={(newEvent) => {
                    setEvents([...events, newEvent]);
                }}
            />

            <EventModal
                isOpen={isEventModalOpen}
                onClose={() => setEventModalOpen(false)}
                eventTitle={selectedEvent?.title}
                eventStartDate={selectedEvent?.start}
                eventEndDate={selectedEvent?.end}
                eventKeyword={selectedEvent?.keyword}
                eventSummary={selectedEvent?.summary}
                eventMemo={selectedEvent?.memo}
                meeting={selectedEvent?.meeting}
            />
        </div>
    );
};

export default MyCalendar;
