// import React from "react";

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context";
import CategoryItemDetails from "./CategoryItemDetails";

import "../../../assets/css/category.css";
import Loading from "../../utils/Loading";
import NoItemMessage from "../../utils/NoItemMessage";

const CategoryItemList = ({ items }) => {
  const [categories, setCategories] = useState([]);
  const { loading } = useGlobalContext();

  // This function is to convert array 1D to 2D, to display list of categories
  // 2 by row
  const convert_items_to_2D_array = (array) => {
    var new2DArray = [];
    while (array.length > 0) {
      new2DArray.push(array.splice(0, 2));
    }
    setCategories(new2DArray);
  };

  useEffect(() => {
    if (items) {
      convert_items_to_2D_array(items);
    }
  }, [items]);

  // display loading while get data
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  // display this msg, if there is no data yet.
  if (categories.length === 0) {
    return (
      <>
        <NoItemMessage msg={"Sorry, no categories found"} />
      </>
    );
  }

  // Display list of categories
  return (
    <>
      {/*<!-- Main Content-->*/}
      <div className="container itemsList mb-5 pb-5 ps-lg-5">
        {categories.map((item, index) => {
          console.log(index);
          return (
            <>
              <div
                className={
                  index !== 0 ? "row no-gutters mt-4" : "row no-gutters"
                }
              >
                <CategoryItemDetails
                  key={index}
                  firstItem={item[0] ? item[0] : null}
                  secondItem={item[1] ? item[1] : null}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CategoryItemList;
