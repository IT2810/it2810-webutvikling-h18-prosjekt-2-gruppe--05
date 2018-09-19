import React, { Component } from 'react';
import Picture from './Picture.js';
import Text from './Text.js';
import AudioPlayer from './AudioPlayer'

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
        category: "",
        name: "",
    }

  }

  render() {
    console.log(this.isAllSelected);
    return (
      <div className="Gallery">
        <Picture allSelected={this.props.allSelected} category={this.props.picture} galleryView={this.props.gallery}/>
        <Text allSelected={this.props.allSelected} category={this.props.text} galleryView={this.props.gallery}></Text>
        <AudioPlayer allSelected={this.props.allSelected} textCategory={this.props.text} pictureCategory={this.props.picture} audioCategory={this.props.audio} galleryView={this.props.gallery}/>
      </div>
    );
  }
}

export default Gallery;
