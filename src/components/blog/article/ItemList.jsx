// import React from "react";

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context";
import useFetch from "../../hooks/useFetch";
import Item from "./Item";

const ItemList = () => {
  const [articles, setArticles] = useState([]);
  const { items } = useFetch("articles");
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
              return <Item key={item.id} {...item} />;
            })}
            {/* <!-- Pager-->*/}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Tout les posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
