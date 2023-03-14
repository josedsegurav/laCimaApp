import React from "react";

function SocialMediaLink(props) {
    return (
        <div>
        <a href={props.linkRef}>
          <i className={props.icon}></i>
        </a>
      </div>
    )
}

export default SocialMediaLink;