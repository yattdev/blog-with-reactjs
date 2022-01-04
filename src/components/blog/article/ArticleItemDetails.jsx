// import React from 'react'
import Moment from "moment";

import { Link } from "react-router-dom";

const ArticleItemDetails = ({
  id,
  title,
  category,
  author,
  date_published,
}) => {
  Moment.locale("fr");
  return (
    <>
      <div className="post-preview">
        <Link to={`${"/articles/" + id}`}>
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{category}</h3>
        </Link>
        <p className="post-meta">
          Par &nbsp;
          <a href="#!">{author}</a> &nbsp;
          {Moment(date_published).format("d MMM YYYY")}
        </p>
      </div>
      {/* <!-- Divider-->*/}
      <hr className="my-4" />
    </>
  );
};

export default ArticleItemDetails;
