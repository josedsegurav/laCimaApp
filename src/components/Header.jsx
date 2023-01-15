import HeaderImg from "./HeaderImg";

function Header(props) {
 
  return (
    <header id="Home">
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
