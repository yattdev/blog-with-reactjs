// import React from "react";

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context";
import ArticleItemDetails from "./ArticleItemDetails";

const ItemList = ({ items }) => {
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
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* <!-- Post preview-->*/}
            {articles.map((item) => {
              return <ArticleItemDetails key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
