import React, { Component } from 'react';
import Categories from './components/Categories/Categories'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super();
    this.state={picture:1};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery picture={this.state.picture}/>
        <Categories
          triggerParentUpdatePicture={this.setPicture.bind(this)}
          triggerParentUpdateText={this.setText}
          triggerParentUpdateAudio={this.setAudio} />
      </div>
    );
  }
  setPicture(PictureCategory) {
    var PicCat=PictureCategory;
    console.log(PicCat);
    this.setState({picture:PicCat});
  }

  setText(TextCategory) {
    console.log(TextCategory)
  }


  setAudio(AudioCategory) {
  console.log(AudioCategory)
  }
}

export default App;
