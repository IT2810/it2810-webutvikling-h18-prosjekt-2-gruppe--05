import React, { Component } from 'react';
import Picture from './Picture.js';
import Text from './Text.js';
import AudioPlayer from './AudioPlayer'

class Gallery extends Component {
  constructor() {
    super()
    this.state = {
        category: "",
        name: "",
    }
  }

  render() {
    return (
      <div className="Gallery">
        <Picture category={this.props.picture} galleryView={this.props.gallery}/>
        <Text category={this.props.text} galleryView={this.props.gallery}/>
        <AudioPlayer allSelected={this.props.allSelected} textCategory={this.props.text} pictureCategory={this.props.picture} audioCategory={this.props.audio} galleryView={this.props.gallery}/>
      </div>
    );
  }
}

export default Gallery;
