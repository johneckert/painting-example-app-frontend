import React from 'react';

import GalleryList from './GalleryList';
import SortGallery from './SortGallery';
import FilterGallery from './FilterGallery';
import MuseumFilter from './MuseumFilter';

class GalleryContainer extends React.Component {
  state = {
    paintings: [],
    artists: [],
    museums: [],
    filterText: '',
    filterCat: 'Title',
    museumSelection: 'All'
  };

  componentDidMount() {
    this.getPaintings();
    this.getArtists();
    this.getMuseums();
  }

  getPaintings = () => {
    fetch('http://localhost:3000/api/v1/paintings')
      .then(res => res.json())
      .then(json => {
        this.setState({ paintings: json });
      });
  };

  getArtists = () => {
    fetch('http://localhost:3000/api/v1/artists')
      .then(res => res.json())
      .then(json => {
        this.setState({ artists: json });
      });
  };

  getMuseums = () => {
    fetch('http://localhost:3000/api/v1/museums')
      .then(res => res.json())
      .then(json => {
        this.setState({ museums: json });
      });
  };
  //SORT FUNCTIONS
  sortGallery = criteria => {
    if (criteria === 'Title') {
      this.sortByTitle();
    } else if (criteria === 'Year') {
      this.sortByYear();
    } else if (criteria === 'Popularity') {
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

  handleFilterChange = event => {
    this.setState({ filterText: event.target.value });
  };

  handleFilterCat = event => {
    this.setState({ filterCat: event.target.value });
  };

  //MUSEUM Filter

  handleMuseumChange = event => {
    this.setState({ museumSelection: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="header">
          <div>
            <h1 className="title">ART</h1>
          </div>
          <ul className="inputs">
            <li>
              <SortGallery sortGallery={this.sortGallery} />
            </li>
            <li>
              <FilterGallery
                handleFilterChange={this.handleFilterChange}
                handleFilterCat={this.handleFilterCat}
                filterText={this.state.filterText}
                filterCat={this.state.filterCat}
              />
            </li>
            <li>
              <MuseumFilter
                museums={this.state.museums}
                handleMuseumChange={this.handleMuseumChange}
                museumSelection={this.state.museumSelection}
              />
            </li>
          </ul>
        </div>
        <div className="main">
          <GalleryList
            museumSelection={this.state.museumSelection}
            filterText={this.state.filterText}
            filterCat={this.state.filterCat}
            paintings={this.state.paintings}
            artists={this.state.artists}
            museums={this.state.museums}
          />
        </div>
      </div>
    );
  }
}

export default GalleryContainer;
