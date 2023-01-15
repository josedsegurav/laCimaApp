import React from "react";

function SidePanel(props) {
  
    return(
        <div id="sidePanel" className="sidepanel" style={{width: props.navIsClicked && "50%"}}>
        <button href="" className="closebtn" onClick={() => props.closePanel()}>&times;</button>
        <a href="#products" onClick={() => props.closePanel()}>Productos </a>
        <a href="#steps" onClick={() => props.closePanel()}>¿Cómo ordenar?</a>
        <a href="#contact" onClick={() => props.closePanel()}>Contacto</a>
      </div>
    )
}

export default SidePanel;