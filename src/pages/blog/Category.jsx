// import React from "react";
import Header from "../../components/Header";
import PaginatedItems from "../../components/utils/PaginatedItems";
import HeaderImage from "../../assets/img/website_progess.png";
import useFetch from "../../components/hooks/useFetch";
import CategoryItemList from "../../components/blog/category/CategoryItemList";
import { useState, useEffect } from "react";

const Category = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const { items } = useFetch("categories");

  useEffect(() => {
    setCategoriesList(() => {
      return items;
    });
  }, [items]);

  if (categoriesList.length === 0) {
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
      {/*<!-- CategoryItemList -->*/}
      <PaginatedItems
        ItemList={CategoryItemList}
        itemsPerPage={6}
        items={categoriesList}
      />
    </>
  );
};

export default Category;
