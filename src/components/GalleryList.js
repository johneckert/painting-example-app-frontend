import React from "react";

import PaintingTile from "./PaintingTile";

class GalleryList extends React.Component {
  //Grab Artist and Museum
  findArtist = artistId =>
    this.props.artists.find(artist => artist.id === artistId);

  findMuseum = museumId =>
    this.props.museums.find(museum => museum.id === museumId);

  //FILTER

  filterGallery = (paintings, filterText, filterCat) => {
    let filteredPaintings = [];
    if (filterCat === "Title") {
      filteredPaintings = this.filterByTitle(paintings, filterText);
    } else if (filterCat === "Year") {
      filteredPaintings = this.filterByYear(paintings, filterText);
      // } else if (filterCat === "Popularity") {
      //   filteredPaintings = this.filterByPopularity(paintings, filterText);
    } else {
      filteredPaintings = this.props.paintings;
    }
    return filteredPaintings;
  };

  //filter helpers

  filterByTitle = (paintings, filterText) =>
    paintings.filter(painting => painting.title.includes(filterText));

  filterByYear = (paintings, filterText) =>
    paintings.filter(painting => painting.title.includes(filterText));

  // filterByPopularity = (paintings, filterText) =>
  //   paintings.filter(painting => painting.votes.includes(filterText));

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
              <PaintingTile
                image={painting.image}
                title={painting.title}
                date={painting.date}
                artist={this.findArtist(painting.artist_id)}
                museum={this.findMuseum(painting.museum_id)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GalleryList;
