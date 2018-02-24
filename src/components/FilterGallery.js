import React from "react";

class FilterGallery extends React.Component {
  state = {
    filter: "",
    filterCat: "Title"
  };

  handleFilterChange = event => {
    this.setState(
      { filter: event.target.value },
      this.props.filter(this.state)
    );
  };

  handleFilterCat = event => {
    this.setState({ filterCat: event.target.value });
  };

  render() {
    return (
      <form>
        <select onChange={this.handleFilterCat} value={this.state.filterCat}>
          <option value="Title">Filter by Title:</option>
          <option value="Year">Filter by Year:</option>
        </select>
        <input onChange={this.handleFilterChange} value={this.state.filter} />
      </form>
    );
  }
}

export default FilterGallery;
