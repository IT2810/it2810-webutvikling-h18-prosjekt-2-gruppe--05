import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
            <div className="Nav">
                <ul>
                    <li><a href='#'>Exhibit 1</a></li>
                    <li><a href='#'>Exhibit 2</a></li>
                    <li><a href='#'>Exhibit 3</a></li>
                    <li><a href='#'>Exhibit 4</a></li>
                </ul>
            </div>
      </div>
    );
  }
}

export default Header;