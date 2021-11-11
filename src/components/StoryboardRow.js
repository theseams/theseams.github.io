import React from "react";
import StoryImage from "./StoryImage";
import Card from "../components/Card";

function StoryboardRow(props) {
  return (
    <Card>
      <div className="StoryboardRow">
        <div className="scenario">
          <b>{props.title}</b>
          <p>{props.children}</p>
        </div>
        <StoryImage image={props.image} link="" />
      </div>
    </Card>
  );
}

export default StoryboardRow;
