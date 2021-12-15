// import React from 'react'

import { Link } from "react-router-dom";

const Item = ({ id, title, category, author, date_published }) => {
  return (
    <>
      <div className="post-preview">
        <Link to={`${"articles/" + id}`}>
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{category}</h3>
        </Link>
        <p className="post-meta">
          Posted by &nbsp;
          <a href="#!">{author}</a> &nbsp;
          {date_published}
        </p>
      </div>
      {/* <!-- Divider-->*/}
      <hr className="my-4" />
    </>
  );
};

export default Item;
