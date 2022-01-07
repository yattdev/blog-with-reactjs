// import React from "react";

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context";
import ArticleItemDetails from "./ArticleItemDetails";

// Style css for list of articles
import "../../../assets/css/articlesList.css";

const ArticleItemList = ({ items }) => {
  const [articles, setArticles] = useState([]);
  const { loading } = useGlobalContext();
  // console.log(items);

  useEffect(() => {
    if (items) {
      setArticles(() => {
        return items;
      });
    }
  }, [items, articles]);

  if (loading) {
    return (
      <>
        <center>Loading...</center>
      </>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="container px-4 px-lg-5">
        {/* cart header */}
        <header>
          <h4 className="row gx-4 gx-lg-5 justify-content-center">
            Sorry! No post yet
          </h4>
        </header>
      </section>
    );
  }

  return (
    <>
      {/*<!-- Main Content-->*/}
      <div className="container itemsList pb-5 mb-3">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-12">
            <div className="row">
              {/* <!-- Post preview-->*/}
              {articles.map((item) => {
                return <ArticleItemDetails key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleItemList;
