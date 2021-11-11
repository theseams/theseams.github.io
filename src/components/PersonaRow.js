import React from "react";
import StoryImage from "./StoryImage";

function PersonaRow(props) {
  return (
    <div className="PersonaRow">
      <div className="scenario">
        <p>{props.children}</p>
      </div>
      <StoryImage className="storyboard" image={props.image} link="" />
    </div>
  );
}

export default PersonaRow;
