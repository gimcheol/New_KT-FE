// AddEventModal.jsx
import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
} from "reactstrap";

const AddEventModal = ({ isOpen, onClose, onSave }) => {
    const [eventTitle, setEventTitle] = useState("");
    const [startEventDate, setStartEventDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endEventDate, setEndEventDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [meeting, setMeetingDay] = useState(false);
    const [eventMemo, setEventMemo] = useState("");

    const handleSaveEvent = () => {
        // Save the event data
        const newEvent = {
            title: eventTitle,
            start: meeting ? `${startEventDate}T${startTime}:00` : startEventDate,
            end: meeting ? `${startEventDate}T${endTime}:00` : endEventDate,
            memo: eventMemo,
            meeting: meeting,
        };
        onSave(newEvent);
        console.log("newEvent:", newEvent);

        // Reset the form and close the modal
        setEventTitle("");
        setStartEventDate("");
        setStartTime("");
        setEndEventDate("");
        setEndTime("");
        setMeetingDay(false);
        setEventMemo("");
        onClose();
    };

    return (
        <Modal isOpen={isOpen} toggle={onClose}>
            <ModalHeader toggle={onClose}>
                <div className="fs-4 fw-semibold">일정 추가</div>
            </ModalHeader>

            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="eventTitle">Title</Label>
                        <Input
                            type="text"
                            id="eventTitle"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup row>
                        <Col md={6}>
                            <Label for="startEventDate">Start Date</Label>
                            <Input
                                type="date"
                                id="startEventDate"
                                value={startEventDate}
                                onChange={(e) => setStartEventDate(e.target.value)}
                            />
                        </Col>

                        {!meeting && (
                            <Col md={6}>
                                <Label for="endEventDate">End Date</Label>
                                <Input
                                    type="date"
                                    id="endEventDate"
                                    value={endEventDate}
                                    onChange={(e) => setEndEventDate(e.target.value)}
                                />
                            </Col>
                        )}
                        
                    </FormGroup>

                    <FormGroup row>
                        {!!meeting && (
                            <Col md={6}>
                                <Input
                                    type="time"
                                    id="startTime"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                />
                            </Col>
                        )}

                        {!!meeting && (
                            <Col md={6}>
                                <Input
                                    type="time"
                                    id="endTime"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                />
                            </Col>
                        )}
                    </FormGroup>
                    
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                id="meeting"
                                checked={meeting}
                                onChange={() => setMeetingDay(!meeting)}
                            />
                            Meeting
                        </Label>
                    </FormGroup>

                    <div style={{ marginBottom: "15px" }} />

                    <FormGroup>
                        <Label for="eventMemo">Memo</Label>
                        <Input
                            type="textarea"
                            id="eventMemo"
                            value={eventMemo}
                            onChange={(e) => setEventMemo(e.target.value)}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={handleSaveEvent}>
                    Save
                </Button>
                <Button color="secondary" onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>

        </Modal>
    );
};

export default AddEventModal;