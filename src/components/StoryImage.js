import React from "react";

function StoryImage(props) {
  return (
    <div className="StoryImage" style={{ width: props.width }}>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        title="Link to image source"
      >
        <img src={props.image} />
      </a>
    </div>
  );
}

export default StoryImage;
