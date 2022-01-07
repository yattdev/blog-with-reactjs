import React from "react";

const NoItemMessage = ({ msg = "Sorry! No post yet" }) => {
  return (
    <>
      <center className="container px-4 px-lg-5">
        <h4 className="row gx-4 gx-lg-5 justify-content-center">{msg}</h4>
      </center>
    </>
  );
};

export default NoItemMessage;
