// import React from "react";
import Header from "../../components/Header";
import PaginatedItems from "../../components/utils/PaginatedItems";
import HeaderImage from "../../assets/img/website_progess.png";
import useFetch from "../../components/hooks/useFetch";
import ArticleItemList from "../../components/blog/article/ArticleItemList";
import { useState, useEffect, useCallback } from "react";
import Loading from "../../components/utils/Loading";

const Article = ({ props = null }) => {
  const [articlesList, setArticlesList] = useState([]);
  const { items } = useFetch("articles");

  const update_articlesList = useCallback(() => {
    if (props) {
      setArticlesList(() => {
        return props;
      });
    } else {
      setArticlesList(() => {
        return items;
      });
    }
  }, [items, props]);

  useEffect(() => {
    update_articlesList();
  }, [update_articlesList]);

  if (articlesList.length === 0) {
    return <Loading />;
  }

  return (
    <>
      {/*<!-- Header -->*/}
      <Header
        title="Blog en developpement..."
        sub_title="Technologie blog, for developers and Entrepreneurs"
        image={HeaderImage}
      />
      {/*<!-- ArticleItemList -->*/}
      <PaginatedItems
        ItemList={ArticleItemList}
        itemsPerPage={3}
        items={articlesList}
      />
    </>
  );
};

export default Article;
