import React, { Component } from 'react';
import Picture from './Picture.js';

class Gallery extends Component {
  render() {
    return (
      <div>
      <Picture category="Transport" name='1'/>
      <div className="Gallery">
      Gallery Component {this.props.text}
      </div>
      </div>
    );
  }
}

export default Gallery;
