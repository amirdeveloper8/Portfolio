import React, { Component } from "react";

class AddNewRow extends Component {
  state = {
    customDiv: [], // set initial state with one div
  };

  addNewRow() {
    let cDivs = this.state.customDiv;
    const cc = this.state.customDiv.length;
    console.log(cc);
  }

  render() {
    return (
      <div>
        {this.state.customDiv.map((cdiv, i) => (
          <div
            className="expense-block"
            key={cdiv}
            id="expense-block-`${i}`"
            data-block={i}
          ></div>
        ))}
        <button onClick={() => this.addNewRow}>Add Row</button>
      </div>
    );
  }
}

export default AddNewRow;
