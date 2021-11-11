import React from "react";
import StoryImage from "./StoryImage";
import Card from "../components/Card";

function PersonaRow(props) {
  return (
    <Card>
      <div className="PersonaRow">
        <p>{props.children}</p>
        <StoryImage image={props.image} link="" />
      </div>
    </Card>
  );
}

export default PersonaRow;
