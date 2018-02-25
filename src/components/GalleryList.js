import React from 'react';

import PaintingTile from './PaintingTile';

class GalleryList extends React.Component {
  //FILTER

  filterGallery = (paintings, filterText, filterCat) => {
    let filteredPaintings = [];
    if (filterCat === 'Title') {
      filteredPaintings = this.filterByTitle(paintings, filterText);
    } else if (filterCat === 'Artist') {
      filteredPaintings = this.filterByArtist(paintings, filterText);
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

  //solo museum Filter

  museumFilter = (paintings, museumSelection) => {
    let filteredPaintings = [];
    if (museumSelection === 'All') {
      return this.filteredPaintings();
    } else {
      filteredPaintings = paintings.filter(painting => painting.museum.name === museumSelection);
    }
    return filteredPaintings;
  };

  filteredPaintings = () =>
    this.props.filterText === ''
      ? this.props.paintings
      : this.filterGallery(this.props.paintings, this.props.filterText, this.props.filterCat);

  render() {
    return (
      <div className="gallery">
        {this.museumFilter(this.filteredPaintings(), this.props.museumSelection).map(painting => {
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
