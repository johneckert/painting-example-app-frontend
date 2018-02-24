import React from "react";

const GalleryList = props => {
  return (
    <ul className="galleryList">
      {" "}
      {props.paintings.length > 0 ? (
        props.paintings.map(painting => {
          return (
            <li key={painting.id}>
              <h4>
                {painting.title} |
                {painting.date}
              </h4>
              <img src={painting.image} alt={painting.title} />
            </li>
          );
        })
      ) : (
        <h3>NO Paintings Found</h3>
      )}
    </ul>
  );
};

export default GalleryList;
