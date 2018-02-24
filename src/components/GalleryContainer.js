import React from "react";

import GalleryList from "./GalleryList";

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

  render() {
    return (
      <div>
        <GalleryList paintings={this.state.paintings} />
      </div>
    );
  }
}

export default GalleryContainer;
