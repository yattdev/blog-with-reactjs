// import React from "react";

const Header = () => {
  return (
    <>
      {/*<!-- Page Header-->*/}
      <header
        class="masthead"
        style={{ backgroundImage: "url('assets/img/home-bg.jpg')" }}
      >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-8">
              <div class="site-heading">
                <h1>Articles récents</h1>
                <span class="subheading">Developpeurs et Entrepreneurs</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
