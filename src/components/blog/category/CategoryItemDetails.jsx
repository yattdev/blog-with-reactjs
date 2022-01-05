// import React from 'react'
import Moment from "moment";

import { Link } from "react-router-dom";

const Item = ({ id, name, description, image }) => {
  Moment.locale("fr");
  return (
    <>
      <div className="post-preview">
        <Link to={`${"/categories/" + id}`}>
          <h2 className="post-name">{name}</h2>
        </Link>
      </div>
      {/* <!-- Divider-->*/}
      <hr className="my-4" />
    </>
  );
};

export default Item;
