import React from "react";

import PaintingTile from "./PaintingTile";

class GalleryList extends React.Component {
  //FILTER

  filterGallery = (paintings, filterText, filterCat) => {
    let filteredPaintings = [];
    if (filterCat === "Title") {
      filteredPaintings = this.filterByTitle(paintings, filterText);
    } else if (filterCat === "Artist") {
      filteredPaintings = this.filterByArtist(paintings, filterText);
    } else if (filterCat === "Museum") {
      filteredPaintings = this.filterByMuseum(paintings, filterText);
    } else {
      filteredPaintings = this.props.paintings;
    }
    return filteredPaintings;
  };

  //filter helpers

  filterByTitle = (paintings, filterText) =>
    paintings.filter(painting => painting.title.includes(filterText));

  filterByArtist = (paintings, filterText) =>
    paintings.filter(painting => painting.artist.name.includes(filterText));

  filterByMuseum = (paintings, filterText) =>
    paintings.filter(painting => painting.museum.name.includes(filterText));

  //solo museum Filter

  museumFilter = (painting, filter) => {
    if (filter === "All") {
      return true;
    } else {
      return painting.museum.name === filter;
    }
  };

  render() {
    const filteredPaintings =
      this.props.filterText === ""
        ? this.props.paintings
        : this.filterGallery(
            this.props.paintings,
            this.props.filterText,
            this.props.filterCat
          );
    return (
      <div className="gallery">
        {filteredPaintings
          .filter(painting =>
            this.museumFilter(painting, this.props.museumSelection)
          )
          .map(painting => {
            return (
              <div className="" key={painting.id}>
                <PaintingTile painting={painting} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default GalleryList;
