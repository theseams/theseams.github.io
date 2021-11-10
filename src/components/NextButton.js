import React from "react";
import { NavLink } from "react-router-dom";

function NextButton(props) {
  return (
    <div className="NextButton">
      <NavLink
        to={props.to}
        exact
        activeClassName="active"
        className="nav-link"
      >
        <button>Next: {props.title}</button>
      </NavLink>
    </div>
  );
}

export default NextButton;
