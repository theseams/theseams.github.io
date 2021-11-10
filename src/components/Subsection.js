import React from "react";
import Subtitle from "./Subtitle";

function Subsection(props) {
  return (
    <section className="Subsection" id={props.id}>
      <Subtitle subtitle={props.title} />
      <div className="content">{props.children}</div>
    </section>
  );
}

export default Subsection;
