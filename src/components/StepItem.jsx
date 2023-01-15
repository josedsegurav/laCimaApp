import React from "react";

function StepItem(props) {
  return (
    <div className="stepsitem_div">
      <div className="stepgrid_item1">
        <i className={props.iconLeft}></i>
        <p className="step_p">{props.textRight}</p>
      </div>
      <div className="stepgrid_item1">
        <p className="step_p">{props.textLeft}</p>
        <i className={props.iconRight}></i>
      </div>
    </div>
  );
}

export default StepItem;
