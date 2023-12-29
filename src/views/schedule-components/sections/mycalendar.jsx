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
        { id: 1, title: 'react1', date: ('2023-12-25'), meeting: true,
            keyword: 'react', summary: 'react를 공부합니다.',
            article_link : ['https://www.naver.com', 'https://www.google.com'],
            article_title : ['네이버', '구글']},
        { id:2, title: 'Meeting2', start: ('2023-12-30T12:00:00'), end: '2023-12-30T12:00:00',
            meeting: false,
            keyword: 'react', summary: 'react를 공부합니다.',
            article_link : ['https://www.naver.com', 'https://www.google.com'],
            article_title : ['네이버', '구글']},
        {
            id: 3,
            title: 'Test2',
            start: ('2023-12-05'),
            end: ('2023-12-07'),
            meeting: false,
            keyword: 'react',
            summary: 'react를 공부합니다.',
            // article_link : ['https://www.naver.com', 'https://www.google.com'],
            // article_title : ['네이버', '구글']
        },
        {id:4, title: '연습1', start: '2023-12-27', end: '2023-12-29', memo: '연습입니다!',
            meeting: true, keyword: '연습', summary: '연습 중',
            article_link : ['https://www.naver.com', 'https://www.google.com'],
            article_title : ['네이버', '구글']},
        {id:5, title: '연습2', start: '2023-12-27T23:10:00', end: '2023-12-27T23:17:00', memo: '연습22',
            meeting: false, keyword: '연습', summary: '연습 중',
            article_link : ['https://www.naver.com', 'https://www.google.com'],
            article_title : ['네이버', '구글']},
        {id:6, title: '그룹미팅', start: '2023-12-28T16:10:00', end: '2023-12-27T17:00:00', memo: '그룹미팅 준비해두기 1시간 30분 소요 예정',
            meeting: false, keyword: '마약', summary: '마약 안돼요',
            article_link : ['https://www.naver.com', 'https://www.google.com'],
            article_title : ['네이버', '구글'],
        },
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

    // 이벤트 삭제 함수
    const handleDeleteEvent = (eventId) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
        setEventModalOpen(false); // 모달을 닫을 수도 있습니다.
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
                eventMeetingSummary={selectedEvent?.summary}
                eventArticleLink={selectedEvent?.article_link}
                eventArticleTitle={selectedEvent?.article_title}
                eventMemo={selectedEvent?.memo}
                meeting={selectedEvent?.meeting}

                onDelete={() => handleDeleteEvent(selectedEvent?.id)}
            />
        </div>
    );
};

export default MyCalendar;
