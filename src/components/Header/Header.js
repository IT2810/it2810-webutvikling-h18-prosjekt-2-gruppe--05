import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
            <div className="Nav">
                <ul>
                    <li onClick={() => this.props.triggerParentUpdateGallery(1)}><a href='#'>Utstilling 1</a></li>
                    <li onClick={() => this.props.triggerParentUpdateGallery(2)}><a href='#'>Utstilling 2</a></li>
                    <li onClick={() => this.props.triggerParentUpdateGallery(3)}><a href='#'>Utstilling 3</a></li>
                    <li onClick={() => this.props.triggerParentUpdateGallery(4)}><a href='#'>Utstilling 4</a></li>
                </ul>
            </div>
      </div>
    );
  }
}

export default Header;
