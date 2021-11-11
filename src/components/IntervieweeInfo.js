import React from "react";

function IntervieweeInfo(props) {
  return (
    <div className="IntervieweeInfo">
      <div className="project-box">
        <img src={props.image} alt="upcycling item" width="150px" />
      </div>
      <div className="interviewee-content">
        <p>
          <b>Age:</b> {props.info[0]}
        </p>
        <p>
          <b>Gender:</b> {props.info[1]}
        </p>
        <p>
          <b>Occupation:</b> {props.info[2]}
        </p>
        <p>
          <b>Sewing Experience:</b> {props.info[3]}
        </p>
        <p>
          <b>Upcycling Task:</b> {props.info[4]}
        </p>
      </div>
    </div>
  );
}

export default IntervieweeInfo;
