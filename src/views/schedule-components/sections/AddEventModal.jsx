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
} from "reactstrap";

const AddEventModal = ({ isOpen, onClose, onSave }) => {
    const [eventTitle, setEventTitle] = useState("");
    const [startEventDate, setStartEventDate] = useState("");
    const [endEventDate, setEndEventDate] = useState("");
    const [eventMemo, setEventMemo] = useState("");

    const handleSaveEvent = () => {
        // Save the event data
        const newEvent = {
            title: eventTitle,
            startDate: startEventDate,
            endDate: endEventDate,
            memo: eventMemo,
        };
        onSave(newEvent);

        // Reset the form and close the modal
        setEventTitle("");
        setStartEventDate("");
        setEndEventDate("");
        setEventMemo("");
        onClose();
    };

    return (
        <Modal isOpen={isOpen} toggle={onClose}>
            <ModalHeader toggle={onClose}>Add Event</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="eventTitle">Event Title</Label>
                        <Input
                            type="text"
                            id="eventTitle"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="startEventDate">Start Date</Label>
                        <Input
                            type="datetime-local" // Change to datetime-local for both start and end
                            id="startEventDate"
                            value={startEventDate}
                            onChange={(e) => setStartEventDate(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="endEventDate">End Date</Label>
                        <Input
                            type="datetime-local" // Change to datetime-local for both start and end
                            id="endEventDate"
                            value={endEventDate}
                            onChange={(e) => setEndEventDate(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="eventMemo">Event Memo</Label>
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
