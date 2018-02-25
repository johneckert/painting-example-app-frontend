import React from "react";

import PaintingTile from "./PaintingTile";

class GalleryList extends React.Component {
  // //Grab Artist and Museum
  // findArtist = artistId =>
  //   this.props.artists.find(artist => artist.id === artistId);
  //
  // findMuseum = museumId =>
  //   this.props.museums.find(museum => museum.id === museumId);

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
      <ul className="galleryList">
        {filteredPaintings.map(painting => {
          return (
            <li key={painting.id}>
              <PaintingTile painting={painting} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GalleryList;
