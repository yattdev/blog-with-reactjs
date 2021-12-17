// import React from "react";

import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="row">
          <div className="copyright col-12 col-md-6">
            Blog Copyright ©
            <a className="text-link" href="https://alassane.yatt.tech/">
              Yattara Alassane
            </a>
          </div>
          <div className="legal col-12 col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link className="text-link" to="#">
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <Link className="text-link" to="#">
                  Terms of Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
