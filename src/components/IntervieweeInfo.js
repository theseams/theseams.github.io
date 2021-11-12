import React from "react";

function IntervieweeInfo(props) {
  return (
    <div className="IntervieweeInfo">
      <div className="project-box">
        <img src={props.image} alt="upcycling item" width="150px" />
      </div>
      <div className="interviewee-content">
        <p>
          <b>Demographic:</b>
          <br />
          {props.info[0]}
        </p>
        <p>
          <b>Occupation:</b>
          <br />
          {props.info[1]}
        </p>
        <p>
          <b>Sewing Experience:</b>
          <br />
          {props.info[2]}
        </p>
        <p>
          <b>Upcycling Task:</b>
          <br />
          {props.info[3]}
        </p>
      </div>
    </div>
  );
}

export default IntervieweeInfo;
