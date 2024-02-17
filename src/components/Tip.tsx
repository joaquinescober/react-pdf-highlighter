import React, { Component } from "react";
import "../style/Tip.css";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  onOpen: () => void;
}

export class Tip extends Component<Props> {
  render() {
    const { onConfirm, onOpen } = this.props;

    return (
      <div className="Tip">
        <div
          className="Tip__compact"
          onClick={() => {
            onOpen();
          }}
        >
          Save Highlight?
        </div>
        <div className="Tip__card">
          <div>
            <button onClick={onConfirm}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Tip;

