// import React from "react";

import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import useFetch from "../../useFetch";
import Parse from "html-react-parser";
import { useGlobalContext } from "../../context";

const ArticleDetails = () => {
  const { articleUID } = useParams();
  const { items } = useFetch("articles/" + articleUID);
  const { loading } = useGlobalContext();

  if (loading) {
    return <center>Loading...</center>;
  }

  if (!items) {
    return (
      <>
        <center>Cette article n'exist pas.</center>
      </>
    );
  }

  const { image, title, sub_title, body } = items;
  return (
    <>
      {/* Post Header */}
      <Header image={image} title={title} sub_title={sub_title} />
      {/*<!-- Post Content-->*/}
      <article className="mb-4">
        <div className="container px-5 px-lg-5">
          <div className="row gx-4 gx-lg-2 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">{Parse(body)}</div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDetails;
