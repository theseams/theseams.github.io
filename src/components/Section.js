import React from "react";
import Title from "./Title";

function Section(props) {
  return (
    <section id={props.id} className="Section">
      <Title title={props.title} />
      <div className="content">{props.children}</div>
    </section>
  );
}

export default Section;
