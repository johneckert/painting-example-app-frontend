import React from "react";

class FilterGallery extends React.Component {
  render() {
    return (
      <div className="filterdiv">
        <select
          className="fselect"
          onChange={event => this.props.handleFilterCat(event)}
        >
          <option value="Title">Filter by Title:</option>
          <option value="Artist">Filter by Artist:</option>
        </select>
        <input
          className="finput"
          onChange={event => this.props.handleFilterChange(event)}
          placeholder="Filter"
        />
      </div>
    );
  }
}

export default FilterGallery;
