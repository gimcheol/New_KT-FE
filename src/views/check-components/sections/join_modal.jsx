// join_modal.jsx

import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

const TermsModal = ({ isOpen, toggleModal, onConfirm }) => {
    const [newKTAgrreement, setNewKTAgrreement] = useState(false);
    const [personalInfoAgreement, setPersonalInfoAgreement] = useState(false);

    const handleNewKTAgreementChange = () => {
        const updatedValue = !newKTAgrreement;
        setNewKTAgrreement(updatedValue);
        // Update the state of the other checkbox
        setPersonalInfoAgreement(updatedValue);
    };

    const handleConfirm = () => {
        // Check if all required checkboxes are checked
        if (personalInfoAgreement) {
            // Call the onConfirm function only if all required checkboxes are checked
            onConfirm();
            // Close the modal
            toggleModal();
        } else {
            // Optionally, you can show a message or take other actions if required checkboxes are not checked
            alert("모든 필수 항목에 동의해야 합니다.");
        }
    };

    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>약관 및 조건</ModalHeader>
            <ModalBody>
                <FormGroup check>
                    <Label check>
                        <Input
                            type="checkbox"
                            checked={newKTAgrreement}
                            onChange={handleNewKTAgreementChange}
                        />
                        New KT 서비스 약관에 모두 동의합니다.
                    </Label>
                </FormGroup>
                <p>
                    전체 동의 시 필수사항 및 선택사항에 대해 일괄 동의하게 되며,
                    개별적으로도 동의를 선택하실 수 있습니다.
                </p>
                <p>
                    필수 항목은 서비스 제공을 위해 필요한 항목이므로, 동의를
                    거부하시는 경우 서비스 이용에 제한이 있을 수 있습니다.
                </p>

                {/* Additional checkboxes */}
                <FormGroup check>
                    <Label check>
                        <Input
                            type="checkbox"
                            checked={personalInfoAgreement}
                            onChange={() =>
                                setPersonalInfoAgreement(!personalInfoAgreement)
                            }
                        />
                        [필수] 개인정보 수집 및 이용 동의
                    </Label>
                </FormGroup>
                {/* Add more checkboxes as needed */}
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={handleConfirm}
                    disabled={!newKTAgrreement && !personalInfoAgreement}
                    >
                    확인
                </Button>
                <Button color="secondary" onClick={toggleModal}>
                    닫기
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default TermsModal;
