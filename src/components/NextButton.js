import React from "react";
import { NavLink } from "react-router-dom";
import rightArrow from "../img/Right Arrow.svg";

function NextButton(props) {
  return (
    <div className="NextButton">
      <div className="btn-content">
        <NavLink
          to={props.to}
          exact
          activeClassName="active"
          className="next-link"
        >
          <button>
            {props.title}
            <img src={rightArrow} alt="next" className="right-arrow" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NextButton;
