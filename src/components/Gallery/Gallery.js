import React, { Component } from 'react';
import Picture from './Picture.js';


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
      </div>
      </div>
    );
  }
}

export default Gallery;
