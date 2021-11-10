import React from "react";
import FigmaEmbed from "react-figma-embed";

function HifiRow(props) {
  return (
    <div>
      <p style={{ display: "flex" }}>
        <FigmaEmbed style={{ marginRight: "2rem" }} url={props.link} />
        <div>
          <p>This prototype was created by {props.member}.</p>
          <p>Pros:</p>
          <p>Cons:</p>
        </div>
      </p>
    </div>
  );
}

export default HifiRow;
