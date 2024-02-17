import React, { Component } from "react";
import "../style/Highlight.css";
import type { LTWHP } from "../types";

interface Props {
  self_id: string;
  notes_id: string;
  position: {
    rects: Array<LTWHP>;
  };
  isScrolledTo: boolean;
}

export class Highlight extends Component<Props> {
  handleOnClick = () => {
    const { self_id } = this.props;
    // Navigate to the URL based on the self_id
    window.location.href = `https://example.com/${self_id}`;
  };

  render() {
    const { position, isScrolledTo } = this.props;
    const { rects } = position;

    return (
      <div
        className={`Highlight ${isScrolledTo ? "Highlight--scrolledTo" : ""}`}
        onClick={this.handleOnClick}
      >
        <div className="Highlight__parts">
          {rects.map((rect, index) => (
            <div
              key={index}
              style={rect}
              className={`Highlight__part`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Highlight;



