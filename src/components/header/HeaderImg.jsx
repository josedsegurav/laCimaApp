import React from "react";

function HeaderImg(props) {
    return(
<img className={props.className} src={props.src} alt={props.alt}></img>
    )
}

export default HeaderImg;