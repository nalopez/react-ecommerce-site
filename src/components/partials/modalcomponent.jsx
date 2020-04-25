import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ModalComponent extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>
          <ModalHeader>{this.props.modalHeader}</ModalHeader>
          <ModalBody>{this.props.modalBody}</ModalBody>
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
