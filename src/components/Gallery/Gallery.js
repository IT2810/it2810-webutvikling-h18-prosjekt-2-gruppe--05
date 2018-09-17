import React, { Component } from 'react';
import Picture from './Picture.js';
import Text from './Text.js';



class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
        category: "",
        name: ""
    }
  }

  render() {
    console.log(this.props.picture)
    return (
      <div>
      <Picture category={this.props.picture} galleryView={this.props.gallery}/>
      <div className="Gallery">
      <Text category="3" name='2'></Text>
      </div>
    );
  }
}

export default Gallery;
