import React from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/" style={{color: `blue`}}>Go to main page</Link>
    </>
  );
};


export default PageNotFound;
