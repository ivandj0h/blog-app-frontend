import React, { Fragment } from "react";

const Jumbotron = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <h3 class="display-2">MyBlog</h3>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4"></hr>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Jumbotron;
