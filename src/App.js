import React, { Component } from 'react';
import Categories from './components/Categories/Categories'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
        <Categories />
      </div>
    );
  }
}

export default App;
