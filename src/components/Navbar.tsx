import { Link } from "react-router-dom";

// import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="mainNav">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/articles">
            STARTER
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu &nbsp;
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="articles">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                {/* Categories that not have a content yet */}
                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-lg-3 py-3 py-lg-4"
                  href="https://alassane.yatt.tech"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
