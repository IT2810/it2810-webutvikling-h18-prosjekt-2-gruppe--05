import React, { Component } from 'react';
import Picture from './Picture.js';
import Text from './Text.js';



class Gallery extends Component {

  render() {
    return (
      <div className="Gallery">
      <Picture category="Transport" name='1'></Picture>
      <Text category="3" name='2'></Text>
      </div>
    );
  }
}

export default Gallery;
