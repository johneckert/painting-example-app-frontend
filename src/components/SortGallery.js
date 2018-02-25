import React from "react";

class SortGallery extends React.Component {
  state = {
    value: "Label"
  };

  handleChange = event => {
    this.setState({ value: event.target.value }, () =>
      this.props.sortGallery(this.state.value)
    );
  };

  render() {
    return (
      <select
        className="ui dropdown"
        onChange={this.handleChange}
        value={this.state.value}
      >
        <option value="Label">Sort</option>
        <option value="Title">Title</option>
        <option value="Year">Year</option>
        <option value="Popularity">Popularity</option>
      </select>
    );
  }
}

export default SortGallery;
