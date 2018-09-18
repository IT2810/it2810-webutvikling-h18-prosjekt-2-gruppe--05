import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
            <div className="Nav">
                <ul>
                    <li onClick={() => this.props.triggerParentUpdateGallery(1)}><p>Utstilling 1</p></li>
                    <li onClick={() => this.props.triggerParentUpdateGallery(2)}><p>Utstilling 2</p></li>
                    <li onClick={() => this.props.triggerParentUpdateGallery(3)}><p>Utstilling 3</p></li>
                    <li onClick={() => this.props.triggerParentUpdateGallery(4)}><p>Utstilling 4</p></li>
                </ul>
            </div>
      </div>
    );
  }
}

export default Header;
