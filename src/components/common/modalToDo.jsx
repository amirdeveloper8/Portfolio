import React, { Component } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

class ModalToDo extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleOpenModal} className="addTask">
          <div className="checkToDo">
            <i className="fa fa-check"></i>
          </div>
          <div className="addText">
            <p>Add a New Task</p>
            <i className="fa fa-plus"></i>
          </div>
        </div>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default ModalToDo;
