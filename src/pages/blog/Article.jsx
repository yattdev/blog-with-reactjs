// import React from "react";
import Header from "../../components/Header";
import PaginatedItems from "../../components/utils/PaginatedItems";
import HeaderImage from "../../assets/img/website_progess.png";
import useFetch from "../../components/hooks/useFetch";
import ArticleItemList from "../../components/blog/article/ArticleItemList";
import { useState, useEffect, useCallback, useRef } from "react";
import Loading from "../../components/utils/Loading";
import NoItemMessage from "../../components/utils/NoItemMessage";
import { useGlobalContext } from "../../context";

const Article = ({ url = "articles" }) => {
  const [articlesList, setArticlesList] = useState([]);
  const { loading } = useGlobalContext();
  const { items } = useFetch(url);
  const mounted = useRef(false);

  const update_articlesList = useCallback(async () => {
    if (mounted.current) {
      setArticlesList(() => {
        return items;
      });
    }
  }, [items]);

  useEffect(() => {
    mounted.current = true; // Will set it to true on mount ...
    update_articlesList();
    return () => {
      mounted.current = false;
    }; // ... and to false on unmount
  }, [update_articlesList]);

  // display loading indicator while fetching data
  if (loading) {
    return <Loading />;
  }

  // Display this msg when there is no data available
  if (articlesList.length === 0) {
    return <NoItemMessage />;
  }

  // Display item list when available
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
