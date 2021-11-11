import React from "react";
import FigmaEmbed from "react-figma-embed";

function HifiRow(props) {
  return (
    <p className="HifiRow">
      <FigmaEmbed className="prototype" url={props.link} />
      <div className="hifi-content">
        <p>
          This prototype was created by <b>{props.member}</b>.
        </p>
        <p style={{ marginTop: "1.75rem" }}>
          The user appreciated the following aspects:
          <ul className="pros-ul">
            {props.pros.map((pro) => (
              <li>{pro}</li>
            ))}
          </ul>
        </p>
        <p style={{ marginTop: "1.75rem" }}>
          The user felt that these aspects could be modified or excluded:
          <ul className="cons-ul">
            {props.cons.map((pro) => (
              <li>{pro}</li>
            ))}
          </ul>
        </p>
      </div>
    </p>
  );
}

export default HifiRow;
