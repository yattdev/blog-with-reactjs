// import React from 'react'
import Moment from "moment";

import { Link } from "react-router-dom";

const ArticleItemDetails = ({
  id,
  title,
  sub_title,
  image,
  category,
  author,
  date_published,
  read_time,
}) => {
  Moment.locale("fr");
  return (
    <>
      {/* Article item */}
      <div className="col-md-6 col-xl-4 my-2">
        <article className="post">
          <div className="article-v2">
            <figure className="article-thumb">
              <Link to={`/articles/${title}/${id}`}>
                <img src={image} alt="blog" />
              </Link>
            </figure>
            <div className="article-content-main">
              <div className="article-header">
                <h2 className="entry-title">
                  <Link to={`/articles/${title}/${id}`}>{title}</Link>
                </h2>
                <div className="entry-meta">
                  <div className="entry-date">
                    {Moment(date_published).format("d MMM YYYY")}
                  </div>
                  <div className="entry-cat">
                    {/* TODO: Display author articles when click on link */}
                    <Link to="#">{author}</Link>
                  </div>
                </div>
              </div>
              <div className="article-content">
                <p>{sub_title}</p>
              </div>
              <div className="article-footer">
                <div className="row">
                  <div className="col-5 text-left footer-link">
                    <Link to={`/articles/${title}/${id}`} className="more-link">
                      Read More
                    </Link>
                  </div>
                  <div className="col-7 text-right footer-meta">
                    <Link to="#">
                      {/* TODO: Added Comment feature */}
                      {/* 65 */} <i className="far fa-comment"></i>
                    </Link>
                    <Link to="#">
                      {/* TODO: Added share feature */}
                      {/* 50 */} <i className="far fa-share-square"></i>
                    </Link>
                    <Link to="#">
                      {/* TODO: Calcul read time */}| {read_time}m read
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleItemDetails;
