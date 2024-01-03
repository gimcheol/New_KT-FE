//mycalendar.jsx
import React, { useState, useEffect } from "react";

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

    useEffect(() => {
        const token = window.localStorage.getItem('token');
    
        if (token) {
            fetch("http://127.0.0.1:8000/api/token/schedule", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,  // 토큰을 Authorization 헤더에 포함
                },
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(now_event => {
                // 데이터를 FullCalendar의 형식에 맞게 가공
                const formattedEvents = now_event.map(event => ({
                    id: event.id,
                    title: event.title,
                    start: event.start,
                    end: event.end,
                    meeting: event.meeting,
                }));
    
                // 가공한 데이터를 FullCalendar에 설정
                setEvents(formattedEvents);
                console.log("formattedEvents:", formattedEvents);
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }, []);
    

    const handleAddButton=()=>{
        setAddEventModalOpen(true);
    }

    // // 클릭한 이벤트의 정보를 모달에 표시
    // const handleEventClick = (clickInfo) => {
    //     // 클릭한 이벤트의 정보를 가져와서 모달을 엽니다.
    //     const { event } = clickInfo;
    //     const eventId = parseInt(event._def.publicId);

    //     // 선택한 event를 찾아서 setSelectedEvent에 저장
    //     setSelectedEvent(events.find((event) => event.id === eventId));
    //     setEventModalOpen(true);
    // };

    const handleEventClick = (clickInfo) => {
        const { event } = clickInfo;
        const eventId = parseInt(event._def.publicId);
        const token = window.localStorage.getItem('token');
    
        fetch(`http://127.0.0.1:8000/api/token/schedule/${eventId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        .then(res => {
            if (res.status !== 201) {
                throw Error(res);
            } return res.json();
        })
        .then(eventDetails => {
            // 클릭한 이벤트 객체에 서버에서 가져온 추가 정보를 추가하여 modal 상태를 업데이트
            setSelectedEvent({
                ...event,
                keyword: eventDetails.keyword,
                summary: eventDetails.summary,
                article_link: eventDetails.article_link,
                article_title: eventDetails.article_title,
                memo: eventDetails.memo,
            });
            setEventModalOpen(true);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    

    // // 이벤트 삭제 함수
    // const handleDeleteEvent = (eventId) => {
    //     setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
    //     setEventModalOpen(false); // 모달을 닫을 수도 있습니다.
    // };
    // 이벤트 삭제 함수
    const handleDeleteEvent = (eventId) => {
        const token = window.localStorage.getItem('token');

        // 서버에 삭제 요청 보내기
        fetch(`http://127.0.0.1:8000/api/token/schedule/${eventId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            // 서버에서 삭제가 성공적으로 이루어졌을 때 클라이언트에서도 해당 이벤트를 제거
            setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
            setEventModalOpen(false); // 모달을 닫을 수도 있습니다.

            // 페이지를 새로고침
            window.location.reload();
        })
        .catch((err) => {
            console.error(err);
        });
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
