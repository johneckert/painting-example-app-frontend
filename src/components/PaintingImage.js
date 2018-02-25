import React from "react";

const PaintingImage = props => {
  return (
    <div>
      <img src={props.painting.image} alt={props.painting.title} />
    </div>
  );
};

export default PaintingImage;
