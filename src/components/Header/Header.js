import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props)
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(tabIndex, style){
    if(this.props.gallery === tabIndex){
      return(style)
    }
  }

  render() {
    const activeStyle = {
      backgroundColor: 'rgb(181, 185, 201)'
    }
    return (
      <div className="Nav">
          <ul>
              <li style={this.setActiveTab(1, activeStyle)} onClick={() => this.props.triggerParentUpdateGallery(1)}><p>Gallery 1</p></li>
              <li style={this.setActiveTab(2, activeStyle)} onClick={() => this.props.triggerParentUpdateGallery(2)}><p>Gallery 2</p></li>
              <li style={this.setActiveTab(3, activeStyle)} onClick={() => this.props.triggerParentUpdateGallery(3)}><p>Gallery 3</p></li>
              <li style={this.setActiveTab(4, activeStyle)} onClick={() => this.props.triggerParentUpdateGallery(4)}><p>Gallery 4</p></li>
          </ul>
      </div>
    );
  }
}

export default Header;
