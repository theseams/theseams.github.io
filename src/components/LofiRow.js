import React from "react";

function LofiRow(props) {
  return (
    <p className="LofiRow">
      <div>
        <iframe
          title="Lofi"
          src={props.link}
          width="500rem"
          height="620rem"
          allow="autoplay"
        />
      </div>
      <div className="lofi-content">
        <p>
          This prototype was created by <b>{props.member}</b>.
        </p>
        <p style={{ marginTop: "1.75rem" }}>
          Our team appreciated the following aspects:
          <ul className="pros-ul">
            {props.pros.map((pro) => (
              <li>{pro}</li>
            ))}
          </ul>
        </p>
        <p style={{ marginTop: "1.75rem" }}>
          Our team felt that these aspects could be modified or excluded:
          <ul className="cons-ul">
            {props.cons.map((pro) => (
              <li>{pro}</li>
            ))}
          </ul>
        </p>
      </div>
    </p>
  );
}

export default LofiRow;
