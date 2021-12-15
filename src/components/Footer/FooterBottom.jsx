import React from "react";

const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="row">
          <div className="copyright col-12 col-md-6">
            Blog Copyright ©
            <a
              className="text-link"
              href="https://themes.3rdwavemedia.com/"
              target="_blank"
            >
              Yattara Alassane
            </a>
          </div>
          <div className="legal col-12 col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="text-link" href="#">
                  Privacy
                </a>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <a className="text-link" href="#">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
