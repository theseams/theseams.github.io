import React from "react";
import StoryImage from "./StoryImage";

function StoryboardRow(props) {
  return (
    <div className="StoryboardRow">
      <div className="scenario">
        <b>{props.title}</b>
        <p>{props.children}</p>
      </div>
      <StoryImage className="storyboard" image={props.image} link="" />
    </div>
  );
}

export default StoryboardRow;
