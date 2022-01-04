// import React from "react";
import Header from "../../components/Header";
import PaginatedItems from "../../components/utils/PaginatedItems";
import HeaderImage from "../../assets/img/website_progess.png";
import useFetch from "../../components/hooks/useFetch";
import ItemList from "../../components/blog/article/ItemList";
import { useState, useEffect } from "react";

const Article = () => {
  const [articlesList, setArticlesList] = useState([]);
  const { items } = useFetch("articles");

  useEffect(() => {
    setArticlesList(() => {
      return items;
    });
  }, [items]);

  if (articlesList.length === 0) {
    return (
      <>
        <center>
          <em>
            <h3>Loading ...</h3>
          </em>
        </center>
      </>
    );
  }

  return (
    <>
      {/*<!-- Header -->*/}
      <Header
        title="Blog en developpement..."
        sub_title="Technologie blog, for developers and Entrepreneurs"
        image={HeaderImage}
      />
      {/*<!-- ItemList -->*/}
      <PaginatedItems
        ItemList={ItemList}
        itemsPerPage={3}
        items={articlesList}
      />
    </>
  );
};

export default Article;
