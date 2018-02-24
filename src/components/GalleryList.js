import React from "react";

class GalleryList extends React.Component {
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
              <h4>
                {painting.title} |
                {painting.date}
              </h4>
              <img src={painting.image} alt={painting.title} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GalleryList;
