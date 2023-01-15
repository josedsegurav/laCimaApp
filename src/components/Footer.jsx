import React from "react";
import SocialMediaLink from "./SocialMediaLink";

function Footer() {
  return (
    <footer>
      <section class="footer">
        <a class="footer_logo">
          <img
            class="footer_logo__img"
            src="/images/AA.png"
            alt="Logo_footer"
          />
        </a>
        <div class="footer_social">
        <SocialMediaLink linkRef="https://www.facebook.com/lacimaonline" icon="fab fa-facebook"/>
        <SocialMediaLink linkRef="https://www.instagram.com/lacimaabastos/?utm_medium=copy_link" icon="fab fa-instagram-square"/>
        <SocialMediaLink linkRef="https://wa.me/593963259369" icon="fab fa-whatsapp"/>
        <SocialMediaLink linkRef="mailto:lacimaonline@gmail.com" icon="fas fa-envelope"/>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
