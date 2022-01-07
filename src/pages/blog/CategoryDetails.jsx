import React from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";

const CategoryDetails = () => {
  const { categoryId, categoryName } = useParams();
  const url = "categorie-articles/" + categoryId + "/" + categoryName;

  // Display list articles of selected category.
  return (
    <>
      <Article url={url} />
    </>
  );
};

export default CategoryDetails;
