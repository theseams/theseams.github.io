import React from "react";

function LofiRow(props) {
  return (
    <p style={{ display: "flex" }}>
      <iframe
        style={{ marginRight: "2rem" }}
        title="Lofi"
        src={props.link}
        width="480"
        height="640"
        allow="autoplay"
      ></iframe>
      <div>
        <p>This prototype was created by {props.member}.</p>
        <p>Pros:</p>
        <p>Cons:</p>
      </div>
    </p>
  );
}

export default LofiRow;
