import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import Loading from "../../components/utils/Loading";
import { useGlobalContext } from "../../context";
import Article from "./Article";

const CategoryDetails = () => {
  let { categoryId, categoryName } = useParams();
  const { loading } = useGlobalContext();
  const [categoryArticles, setCategoryArticles] = useState([]);
  const { items } = useFetch(
    `categorie-articles/${categoryId}/${categoryName}`
  );

  const update_categoryArticles = useCallback(() => {
    if (items) {
      setCategoryArticles(items);
    }
  }, [items]);

  useEffect(() => {
    update_categoryArticles();
  }, [update_categoryArticles]);

  if (categoryArticles.length === 0) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Article props={items} />
    </>
  );
};

export default CategoryDetails;
