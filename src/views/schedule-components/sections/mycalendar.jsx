//mycalendar.jsx
import { Badge, Button } from "reactstrap";

import React, { useState } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

import AddEventModal from "./AddEventModal.jsx";
import EventModal from './EventModal.jsx';

import "../css/mycalendar.css";

const MyCalendar = () => {
    const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [events, setEvents] = useState([
        {id:1, title: 'react1', date: '2023-12-23', memo: '연습' },
        {id:2, title: 'react2', date: '2023-12-23', memo: '연습2' },
    ]); // State to store events
    

    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };

    const handleEventClick = (clickInfo) => {
        // 클릭한 이벤트의 정보를 가져와서 모달을 엽니다.
        const { event } = clickInfo;
        const eventId = parseInt(event._def.publicId);

        // 선택한 event를 찾아서 setSelectedEvent에 저장
        setSelectedEvent(events.find((event) => event.id === eventId));
        setAddEventModalOpen(false);

    };

    const handleAddEventButtonClick = () => {
        setAddEventModalOpen(true);
    };
    
    const handleModalClose = () => {
        setAddEventModalOpen(false);
        setSelectedEvent(null);
    };

    const handleSaveEvent = (event) => {
        // Update events state with the new event
        setEvents([...events, event]);
    };

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: 'prev,next today',
                    center: 'title',
                    end: 'dayGridMonth,dayGridWeek,dayGridDay addEventButton',
                }}

                customButtons={{
                    addEventButton: {
                        text: 'add',
                        className: 'custom-add-button',
                        click: handleAddEventButtonClick,
                    },
                }}

                height="85vh"
                dateClick={handleDateClick}
                eventClick={handleEventClick} // 이벤트 클릭 시 처리할 함수 지정
                events={events} // Pass events to FullCalendar
            />
            <AddEventModal
                isOpen={isAddEventModalOpen}
                onClose={handleModalClose}
                onSave={handleSaveEvent}
                selectedEvent={selectedEvent}
            />
            <EventModal
                isOpen={!!selectedEvent}
                onClose={handleModalClose}
                eventTitle={selectedEvent ? selectedEvent.title : ''}
                eventDate={selectedEvent ? selectedEvent.date : ''}
                eventKeyword={'/* 여기에 키워드 값이 들어가야 함 */'}
                eventSummary={'/* 여기에 요약 값이 들어가야 함 */'}
                eventMemo={selectedEvent ? selectedEvent.memo : ''}
            />
        </div>
    );
};

export default MyCalendar;
