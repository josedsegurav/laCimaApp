import React, { useState } from "react";
import SidePanel from "./SidePanel";
import HeaderImg from "./HeaderImg";

function Header(props) {
  const [navMenu, setNavMenu] = useState(false);

  function openNav() {
    setNavMenu(true);
  }

  function closeNav() {
    setNavMenu(false);
  }

  return (
    <header id="Home">
      <div id="navbar" className="headernav_div">
        <a className="logohome_link" href="#Home">
        <HeaderImg className="navlogo_img" src="/images/Asset 2@2x.png" alt="Logo" />
        </a>
        
        <HeaderImg className="navlogocompleto_img" src="/images/Asset 3@2x.png" alt="LogoCompleto" />
        <button
          className="fas fa-bars fa-2x"
          onClick={() => openNav()}
        ></button>

        <SidePanel closePanel={closeNav} navIsClicked={navMenu}  />
      </div>
      <div className="header_logodiv">
      <HeaderImg className="header__logo_img" src="/images/Asset 2@3x.png" alt="LogoAzulyAmarillo" />
        <h3 className="header_h1">Productos Naturales y Artesanales</h3>
        <p className="header_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
          malesuada orci, non blandit diam.
        </p>
      </div>
      <HeaderImg className="header_yogurtimg" src="/images/frambuesa.png" alt="YogurtNatural" />
      </header>
  );
}

export default Header;
