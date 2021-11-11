import React from "react";

function MemberIntro(props) {
  return (
    <div className="MemberIntro">
      <div className="picture-box">
        <img src={props.image} alt="Member" />
      </div>
      <div className="quote-box">{props.quote}</div>
    </div>
  );
}

export default MemberIntro;
