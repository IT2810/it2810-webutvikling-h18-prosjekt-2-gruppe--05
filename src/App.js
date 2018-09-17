import React, { Component } from 'react';
import Categories from './components/Categories/Categories'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state=({picture:0, gallery:1});
  }
  render() {
    return (
      <div className="App">
        <Header triggerParentUpdateGallery={this.setGallery.bind(this)} />
        <Gallery picture={this.state.picture} gallery={this.state.gallery}/>
        <Categories
          triggerParentUpdatePicture={this.setPicture.bind(this)}
          triggerParentUpdateText={this.setText}
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
    var text=TextCategory
    console.log(TextCategory)
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
