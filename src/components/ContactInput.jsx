import React from "react";

function ContactInput(props) {
  return (
    <div>
      <label htmlFor={props.labelFor}>{props.labelText}</label>
      <input
        type={props.inputType}
        id={props.inputId}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
      />
    </div>
  );
}

export default ContactInput;
