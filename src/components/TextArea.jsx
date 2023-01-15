import React from "react";

function TextArea(props) {
    return(
        <div>
        <label for={props.labelFor} >{props.labelText} </label>
        <textarea name={props.textName} id={props.textId} cols={props.textCols} rows={props.textRows} ></textarea>
        </div>
    )
}

export default TextArea;