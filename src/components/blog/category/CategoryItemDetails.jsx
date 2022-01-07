// import React from 'react'
import Moment from "moment";

import { Link } from "react-router-dom";

const Item = ({ firstItem, secondItem }) => {
  // change locale value, that affect time display
  Moment.locale("fr");

  return (
    <>
      {/*Display item only if it exist*/}
      {firstItem && (
        <div className="col-xl-6 col-12 mb-5 mb-xl-0">
          <div className="media media-news">
            <div className="media-img">
              <img
                src="https://via.placeholder.com/350x280/FFB6C1/000000"
                alt="Generic placeholder"
              />
            </div>
            <div className="media-body">
              <span className="media-date">Number of articles</span>
              <h5 className="mt-0 sep">{firstItem.name}</h5>
              <p>{firstItem.description.substr(0, 150)}</p>
              <Link
                to={`/categories/${firstItem.name}/${firstItem.id}`}
                className="btn btn-transparent"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      )}

      {/*Display item only if it exist*/}
      {secondItem && (
        <div className="col-xl-6 col-12">
          <div className="media media-news">
            <div className="media-img">
              <img
                src="https://via.placeholder.com/350x280/87CEFA/000000"
                alt="Generic placeholder"
              />
            </div>
            <div className="media-body">
              <span className="media-date">Number of articles</span>
              <h5 className="mt-0 sep"> {secondItem.name}</h5>
              <p>{secondItem.description.substr(0, 150)}</p>
              <Link
                to={`/categories/${secondItem.name}/${secondItem.id}`}
                className="btn btn-transparent"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
