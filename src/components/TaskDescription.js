import React from "react";

function TaskDescription(props) {
  let title =
    props.task === "Plan"
      ? "Viewing possibilities"
      : props.task === "Measure"
      ? "Visualizing final product"
      : "Creating final product";

  let subtitle =
    props.task === "Plan"
      ? "View the possible upcycling projects that can be done with the kind of clothes they want to upcycle"
      : props.task === "Measure"
      ? "Visualise how the final product would look like on the user, and customise the size of the product as necessary"
      : "Begin sewing the product, solving any issues that crop up along the way";

  return (
    <div>
      <b>{title}</b>
      <p>{subtitle}</p>
      <hr style={{ marginTop: "1.75rem", marginBottom: "0" }} />
    </div>
  );
}

export default TaskDescription;
