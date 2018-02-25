import React from "react";

const PaintingInfo = props => {
  return (
    <div>
      <ul>
        <li>
          <h4>{props.painting.title}</h4>
        </li>
        <li>Date: {props.painting.date}</li>
        <li>Artist: {props.painting.artist.name} </li>
        <li>Museum: {props.painting.museum.name}</li>
      </ul>
    </div>
  );
};

export default PaintingInfo;
