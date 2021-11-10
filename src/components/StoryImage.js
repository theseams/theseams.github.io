import React from "react";

function StoryImage(props) {
  return (
    <div className="StoryImage" style={{ width: props.width }}>
      {props.link !== "" ? (
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          title="Link to image source"
        >
          <img src={props.image} alt="Story" />
        </a>
      ) : (
        <img src={props.image} alt="Story" />
      )}
    </div>
  );
}

export default StoryImage;
