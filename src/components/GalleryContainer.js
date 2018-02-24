import React from "react";

import GalleryList from "./GalleryList";
import SortGallery from "./SortGallery";

class GalleryContainer extends React.Component {
  state = {
    paintings: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/paintings")
      .then(res => res.json())
      .then(json => {
        this.setState({ paintings: json });
      });
  }

  sortGallery = criteria => {
    if (criteria === "Title") {
      this.sortByTitle();
    } else if (criteria === "Year") {
      this.sortByYear();
    } else if (criteria === "Popularity") {
      this.sortByPopularity();
    }
  };

  //SORT HELPERS
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

  render() {
    return (
      <div>
        <SortGallery sortGallery={this.sortGallery} />
        <GalleryList paintings={this.state.paintings} />
      </div>
    );
  }
}

export default GalleryContainer;
