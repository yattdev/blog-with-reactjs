// import React from "react";
import Header from "../../components/Header";
import PaginatedItems from "../../components/utils/PaginatedItems";

const Article = () => {
  return (
    <>
      {/*<!-- Header -->*/}
      <Header />
      {/*<!-- ItemList -->*/}
      <PaginatedItems itemsPerPage={1} />
    </>
  );
};

export default Article;
