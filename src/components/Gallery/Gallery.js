import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        Gallery Component {this.props.text}
      </div>
    );
  }
}

export default Gallery;
