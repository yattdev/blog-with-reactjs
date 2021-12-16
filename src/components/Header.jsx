// import React from "react";

const Header = ({ image, title, sub_title }) => {
  return (
    <>
      {/*<!-- Page Header-->*/}
      <header className="masthead" style={{ backgroundImage: `url(${image})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-8">
              <div className="site-heading">
                <h1>{title}</h1>
                <h2 className="subheading">{sub_title}</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
