import React, { Component } from 'react';
import Categories from './components/Categories/Categories'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery text="Yeah"/>
        <Categories />
      </div>
    );
  }
}

export default App;
