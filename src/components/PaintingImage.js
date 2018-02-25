import React from "react";

const PaintingImage = props => {
  return (
    <img className="" src={props.painting.image} alt={props.painting.title} />
  );
};

export default PaintingImage;
