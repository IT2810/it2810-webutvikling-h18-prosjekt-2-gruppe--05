import React, { Component } from 'react';
import Picture from './Picture.js';


class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
        category: ""
    }
  }

  update() {
    return "1";
  }



  render() {
    console.log(this.props.picture)
    return (
      <div>
      <Picture category={this.props.picture} name='1'/>
      <div className="Gallery">
      </div>
      </div>
    );
  }
}

export default Gallery;
