import React from "react";

import PaintingImage from "./PaintingImage";
import PaintingInfo from "./PaintingInfo";

class PaintingTile extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => this.setState({ clicked: !this.state.clicked });

  render() {
    return (
      <div className="painting-tile" onClick={this.handleClick}>
        {this.state.clicked === false ? (
          <PaintingImage painting={this.props.painting} />
        ) : (
          <PaintingInfo painting={this.props.painting} />
        )}
      </div>
    );
  }
}

export default PaintingTile;

//how can I get painting width height and make it the dimensions of the info div
