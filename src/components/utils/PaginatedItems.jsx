import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ItemList from "../blog/article/ItemList";
import useFetch from "../hooks/useFetch";

// Example items, to simulate fetching from another resources.

function PaginatedItems({ itemsPerPage }) {
  const { items } = useFetch("articles");
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemList items={currentItems} />

      <div className="d-flex justify-content-center mb-4">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item active"
          breakLinkClassName="page-link"
          containerClassName="pagination pagination-circle"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default PaginatedItems;
