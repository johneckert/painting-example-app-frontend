import React from "react";

const Info = props => {
  return (
    <div>
      <h5>
        {props.title} |
        {props.date}
      </h5>
      <h6>Artist: </h6>
      <h6>Museum: </h6>
    </div>
  );
};

export default Info;
