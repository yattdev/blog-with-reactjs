// import React from "react";
import SocialIcons from "./SocialIcons";
// import ProductLinks from "./ProductLinks";
// import ResourcesLinks from "./ResourcesLinks";
// import AboutLinks from "./AboutLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container py-5 mb-3">
          <div className="row">
            <div className="footer-col col-12 col-md-6 col-lg-5 mb-3">
              <h4>
                    Starter
              </h4>
              <div>
                Un blog dans le monde du tech, fondamentalement pour les developpeurs and entrepreneurs.
              </div>
              {/* SocialIcons */}
              <SocialIcons />
            </div>

            <div className="footer-col col-12 col-md-6  col-lg-7 mb-lg-3">
              <div className="row">
                {/* ProductLinks
                <ProductLinks /> */}
                {/* ResourcesLinks
                <ResourcesLinks />  */}
                {/* AboutLinks
                <AboutLinks /> */}
              </div>
            </div>
          </div>
          <hr />
          {/* FooterBottom */}
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default Footer;
