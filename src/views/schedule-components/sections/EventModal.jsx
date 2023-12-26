// EventModal.jsx
import React from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Col,
    Row,
    Container,
} from "reactstrap";
import "../css/EventModal.css";

const EventModal = ({
    isOpen,
    onClose,
    eventTitle,
    eventStartDate,
    eventEndDate,
    eventKeyword,
    eventSummary,
    eventMemo,
}) => {
    return (
        <Modal isOpen={isOpen} toggle={onClose} className="modal-xl">
            {" "}
            {/* 추가된 className */}
            <ModalHeader toggle={onClose}>
                <div className="fs-1">{eventTitle}</div>
                <div className="fs-6">{`${eventStartDate} - ${eventEndDate}`}</div>
            </ModalHeader>
            <ModalBody className="d-flex flex-column gap-3">
                <Row>
                    <Col>
                      <h3>키워드</h3>
                        <div>
                            <p>{eventKeyword}</p>
                        </div>
                    </Col>
                    <Col>
                      <h3>기사</h3>
                        <div>
                            <p>{eventSummary}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                  <h3>회의 요약</h3>
                  <p>{eventSummary}</p>
                </Row>
                <Row>
                  <h3>메모</h3>
                  <p>{eventMemo}</p>
                </Row>
            </ModalBody>
        </Modal>
    );
};

export default EventModal;
