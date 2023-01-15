import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";


import { useState } from "react";
import SidePanel from "../../components/SidePanel";
import HeaderImg from "../../components/HeaderImg";

function Navigation () {

  const [navMenu, setNavMenu] = useState(false);

  function openNav() {
    setNavMenu(true);
  }

  function closeNav() {
    setNavMenu(false);
  }

  return(
    <Fragment>
    <div id="navbar" className="headernav_div">
    <Link className="logohome_link" to="/">
    <HeaderImg className="navlogo_img" src="/images/Asset 2@2x.png" alt="Logo" />
    </Link>
    
    <HeaderImg className="navlogocompleto_img" src="/images/Asset 3@2x.png" alt="LogoCompleto" />
    <div>
    <Link to="/auth" >Log In</Link>
    <button
      className="fas fa-bars fa-2x"
      onClick={() => openNav()}
    ></button>
    <SidePanel closePanel={closeNav} navIsClicked={navMenu}  />
    </div>
  </div>
  <Outlet />
  </Fragment>
  )
}

export default Navigation;