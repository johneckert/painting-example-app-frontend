import React from "react";

const Painting = props => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default Painting;
