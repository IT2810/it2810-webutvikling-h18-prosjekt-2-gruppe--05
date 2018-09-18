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
    //console.log(this.props.picture)
    console.log(this.props.text)
    return (
      <div className="Gallery">
      <Picture category={this.props.picture} galleryView={this.props.gallery}/>
      <Text category={this.props.text} galleryView={this.props.gallery}></Text>
      </div>
    );
  }
}

export default Gallery;
