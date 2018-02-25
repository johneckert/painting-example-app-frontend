import React from "react";

const PaintingInfo = props => {
  return (
    <div>
      <h5>
        {props.painting.title} |
        {props.painting.date}
      </h5>
      <h6>Artist: {props.painting.artist.name} </h6>
      <h6>Museum: {props.painting.museum.name}</h6>
    </div>
  );
};

export default PaintingInfo;
