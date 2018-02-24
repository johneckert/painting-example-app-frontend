import React from "react";

import GalleryList from "./GalleryList";
import SortGallery from "./SortGallery";
import FilterGallery from "./FilterGallery";

class GalleryContainer extends React.Component {
  state = {
    paintings: []
  };

  componentDidMount() {
    this.getPaintings();
  }

  getPaintings = () => {
    fetch("http://localhost:3000/api/v1/paintings")
      .then(res => res.json())
      .then(json => {
        this.setState({ paintings: json });
      });
  };
  //SORT FUNCTIONS
  sortGallery = criteria => {
    if (criteria === "Title") {
      this.sortByTitle();
    } else if (criteria === "Year") {
      this.sortByYear();
    } else if (criteria === "Popularity") {
      this.sortByPopularity();
    }
  };

  //sort helpers
  sortByTitle = () => {
    const paintings = this.state.paintings.sort((a, b) => {
      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();
      if (aTitle < bTitle) {
        return -1;
      } else if (aTitle > bTitle) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ paintings });
  };

  sortByYear = () => {
    const paintings = this.state.paintings.sort((a, b) => {
      return parseInt(a.date, 10) - parseInt(b.date, 10);
    });
    this.setState({ paintings });
  };

  sortByPopularity = () => {
    const paintings = this.state.paintings.sort((a, b) => {
      return b.votes - a.votes;
    });
    this.setState({ paintings });
  };

  //FILTER FUNCTIONS

  filterGallery = ({ filter, filterCat }) => {
    if (filterCat === "Title") {
      this.filterByTitle(filter);
    } else if (filterCat === "Year") {
      this.filterByYear(filter);
    }
    // else if (filterCat === "Popularity") {
    //   this.filterByPopularity(filter);
    // }
  };

  //filter helpers

  filterByTitle = filter => {
    const filteredPaintings = this.state.paintings.filter(painting =>
      painting.title.includes(filter)
    );
    this.setState({ paintings: filteredPaintings });
  };

  filterByYear = filter => {
    const filteredPaintings = this.state.paintings.filter(
      painting => (painting.date ? painting.date.includes(filter) : false)
    );
    this.setState({ paintings: filteredPaintings });
  };

  // filterByPopularity = filter => {
  //   const filteredPaintings = this.state.paintings.filter(painting =>
  //     painting.votes.includes(filter)
  //   );
  //   this.setState({ paintings: filteredPaintings });
  // };

  render() {
    return (
      <div>
        <SortGallery sortGallery={this.sortGallery} />
        <FilterGallery filter={this.filterGallery} />
        <GalleryList
          filterGallery={this.filterGallery}
          paintings={this.state.paintings}
        />
      </div>
    );
  }
}

export default GalleryContainer;
