import React from "react";
import { Link } from "react-router-dom";
function SidePanel(props) {
  
    return(
        <div id="sidePanel" className="sidepanel" style={{width: props.navIsClicked && "50%"}}>
        <button href="" className="closebtn" onClick={() => props.closePanel()}>&times;</button>
        <Link to="#products" onClick={() => props.closePanel()}>Productos </Link>
        <a href="#steps" onClick={() => props.closePanel()}>¿Cómo ordenar?</a>
        <a href="#contact" onClick={() => props.closePanel()}>Contacto</a>
        <Link className="link" onClick={() => props.closePanel()} to="/shop">Shop</Link>
      </div>
    )
}

export default SidePanel;