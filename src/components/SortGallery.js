import React from "react";

class SortGallery extends React.Component {
  state = {
    value: "Title"
  };

  handleChange = event => {
    this.setState({ value: event.target.value }, () =>
      this.props.sortGallery(this.state.value)
    );
  };

  render() {
    return (
      <select onChange={this.handleChange}>
        <option value="Title">Title</option>
        <option value="Year">Year</option>
        <option value="Popularity">Popularity</option>
      </select>
    );
  }
}

export default SortGallery;
