// import React from "react";
import Header from "../../components/Header";
import PaginatedItems from "../../components/utils/PaginatedItems";
import HeaderImage from "../../assets/img/website_progess.png";

const Article = () => {
  return (
    <>
      {/*<!-- Header -->*/}
      <Header
        title="Blog en developpement..."
        sub_title="Technologie blog, for developers and Entrepreneurs"
        image={HeaderImage}
      />
      {/*<!-- ItemList -->*/}
      <PaginatedItems itemsPerPage={3} />
    </>
  );
};

export default Article;
