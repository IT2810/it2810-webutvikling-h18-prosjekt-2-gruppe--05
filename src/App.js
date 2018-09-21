import React, { Component } from 'react';
import Categories from './components/Categories/Categories'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state=({
      text: 1,
      audio: 1,
      picture:1,
      gallery:1,
      allSelected: true});
  }

  render() {
    return (
      <div className="App">
        <h1 id="pageHeader">Our Gallery</h1>
        <Header gallery={this.state.gallery} triggerParentUpdateGallery={this.setGallery.bind(this)} />
        <Gallery allSelected={this.state.allSelected} audio={this.state.audio} text={this.state.text} picture={this.state.picture} gallery={this.state.gallery}/>
        <Categories
          triggerParentUpdatePicture={this.setPicture.bind(this)}
          triggerParentUpdateText={this.setText.bind(this)}
          triggerParentUpdateAudio={this.setAudio.bind(this)} />
      </div>
    );
  }
  setPicture(PictureCategory) {
    this.setState({picture:PictureCategory, gallery:1});
  }

  setText(TextCategory) {
    this.setState({text:TextCategory, gallery:1});
  }

  setAudio(AudioCategory) {
    this.setState({audio: AudioCategory, gallery: 1});
  }

  setGallery(gallery) {
    this.setState({gallery:gallery});
  }
}

export default App;
