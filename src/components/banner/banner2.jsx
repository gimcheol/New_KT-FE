import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap";

const HeaderBanner2 = () => {
    const [schedule, setSchedule] = useState([
        {id:6, title: '그룹미팅', start: '2023-12-28T16:10:00', end: '2023-12-28T17:00:00', memo: '그룹미팅 준비해두기 1시간 30분 소요 예정', },
    ]);

    // useEffect(() => {
    //     // Make an API call to fetch today's schedule from the server
    //     // Replace the URL with your actual API endpoint
    //     fetch("/api/schedule")
    //         .then(response => response.json())
    //         .then(data => setSchedule(data))
    //         .catch(error => console.error("Error fetching schedule:", error));
    // }, []);

    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        {schedule.length > 0 ? (
                            schedule.map(event => (
                                <Card key={event.id} className="m-t-20">
                                    <CardHeader>
                                        {event.title}</CardHeader>
                                    <CardBody>
                                        <CardTitle>{event.title}</CardTitle>
                                        <CardText>{event.description}</CardText>
                                    </CardBody>
                                </Card>
                            ))
                        ) : (
                            <p>Loading schedule...</p>
                        )}
                        <Link
                            to="/meeting"
                            className="btn btn-md m-t-40 btn-info-gradiant font-16"
                            style={{ marginTop: "20px" }}
                        >
                            Meeting
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderBanner2;
