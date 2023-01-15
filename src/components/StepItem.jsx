import React from "react";

function StepItem(props) {
  return (
    <div className="stepsitem_div">
      <div class="stepgrid_item1">
        <i class={props.iconLeft}></i>
        <p class="step_p">{props.textRight}</p>
      </div>
      <div class="stepgrid_item1">
        <p class="step_p">{props.textLeft}</p>
        <i class={props.iconRight}></i>
      </div>
    </div>
  );
}

export default StepItem;
