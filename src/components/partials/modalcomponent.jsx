import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ModalComponent extends React.Component {
  render() {
    const { show, header, body } = this.props.modal;

    return (
      <div>
        <Modal isOpen={show}>
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>{body}</ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => this.props.onToggleModal()}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
