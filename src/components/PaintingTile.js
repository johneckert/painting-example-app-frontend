import React from "react";

import Painting from "./Painting";
import Info from "./Info";

class PaintingTile extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => this.setState({ clicked: !this.state.clicked });

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.clicked === false ? (
          <Painting image={this.props.image} title={this.props.title} />
        ) : (
          <Info
            title={this.props.title}
            date={this.props.date}
            artist={this.props.artist}
            museum={this.props.museum}
          />
        )}
      </div>
    );
  }
}

export default PaintingTile;

//how can I get painting width height and make it the dimensions of the info div
