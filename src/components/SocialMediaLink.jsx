import React from "react";

function SocialMediaLink(props) {
    return (
        <div>
        <a href={props.linkRef}>
          <i class={props.icon}></i>
        </a>
      </div>
    )
}

export default SocialMediaLink;