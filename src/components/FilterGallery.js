import React from "react";

class FilterGallery extends React.Component {
  render() {
    return (
      <form>
        <select onChange={event => this.props.handleFilterCat(event)}>
          <option value="Title">Filter by Title:</option>
          <option value="Year">Filter by Year:</option>
        </select>
        <input
          onChange={event => this.props.handleFilterChange(event)}
          placeholder="Filter"
        />
      </form>
    );
  }
}

export default FilterGallery;
