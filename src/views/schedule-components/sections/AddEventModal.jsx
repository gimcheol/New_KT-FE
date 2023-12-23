//AddEventModal.jsx
import React, { useState } from 'react';
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
} from 'reactstrap';

const AddEventModal = ({ isOpen, onClose, onSave }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventMemo, setEventMemo] = useState('');

  const handleSaveEvent = () => {
    // Save the event data
    const newEvent = { title: eventTitle, date: eventDate, memo: eventMemo };
    onSave(newEvent);

    // Reset the form and close the modal
    setEventTitle("");
    setEventDate("");
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
            <Label for="eventDate">Event Date</Label>
            <Input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
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
