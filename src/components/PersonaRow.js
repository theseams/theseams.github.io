import React from "react";

function PersonaRow(props) {
  return (
    <div className="PersonaRow">
      <p>{props.children}</p>
      <img src={props.image} alt="" />
    </div>
  );
}

export default PersonaRow;
