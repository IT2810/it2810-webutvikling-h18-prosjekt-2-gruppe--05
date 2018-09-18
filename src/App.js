import React, { Component } from 'react';
import Categories from './components/Categories/Categories'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state=({text:0, picture:0, gallery:1});
  }
  render() {
    return (
      <div className="App">
        <Header triggerParentUpdateGallery={this.setGallery.bind(this)} />
        <Gallery text={this.state.text} picture={this.state.picture} gallery={this.state.gallery}/>
        <Categories
          triggerParentUpdatePicture={this.setPicture.bind(this)}
          triggerParentUpdateText={this.setText.bind(this)}
          triggerParentUpdateAudio={this.setAudio} />
        <AudioPlayer />
      </div>
    );
  }
  setPicture(PictureCategory) {
    var PicCat=PictureCategory;
    console.log(PicCat);
    this.setState({picture:PicCat, gallery:1});
  }

  setText(TextCategory) {
    console.log(TextCategory);
    this.setState({text:TextCategory, gallery:1});
  }

  setAudio(AudioCategory) {
  console.log(AudioCategory)
  }

  setGallery(utstilling) {
    var gal=utstilling;
    console.log(gal);
    this.setState({gallery:gal});
  }
}


export default App;
