import "./navigation.styles.scss";
import Footer from "../../components/footer/Footer";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";


import { useState } from "react";
import SidePanel from "../../components/sidepanel/SidePanel";
import HeaderImg from "../../components/header/HeaderImg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { signUserOut } from "../../firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";


function Navigation () {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext); 
  const [navMenu, setNavMenu] = useState(false);

  const toggleIsCartopen = () => setIsCartOpen(!isCartOpen)

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
    <div className="interaction-container" >

    {currentUser ? (
      <span onClick={signUserOut} >Sign Out</span>
    ) : (
      <Link className="auth-link" to="/auth" >Log In</Link>
    )}

      <span className="fas fa-shopping-cart nav-icon" onClick={toggleIsCartopen} >{cartCount}</span>
      
      {isCartOpen && <CartDropdown closeCartDropdown={toggleIsCartopen} /> }

    <button
      className="fas fa-bars nav-icon"
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