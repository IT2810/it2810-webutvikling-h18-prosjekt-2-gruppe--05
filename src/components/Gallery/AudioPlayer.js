import React, { Component } from 'react';

class AudioPlayer extends Component {
  constructor(props){
    super(props);

    this.state = {
      playing: false,
      buttonText: "Play",
      source: ""
    }

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);

  }

  componentDidUpdate(prevProps){
    if((prevProps.audioCategory !== this.props.audioCategory 
      || prevProps.galleryView !== this.props.galleryView
      || prevProps.pictureCategory !== this.props.pictureCategory
      || prevProps.textCategory !== this.props.textCategory) 
      && prevProps.category !== 0){
        this.pauseAudio();
      }
  }

  playAudio(){
    if(this.props.audioCategory === 0){
      alert("Please select a sound category first.")
    } else {
      this.setState({
        playing: true,
        buttonText: "Stop",
        source: "Sounds/" + this.props.audioCategory + "/" + this.props.galleryView + ".mp3"
      })
      console.log(this.props.audioCategory + " " + this.props.galleryView)
      console.log("Are u even trying???")
      this.Audio.pause()
      this.Audio.load()
      this.Audio.play()
    }
  }

  pauseAudio(){
    this.setState({ playing: false, buttonText: "Play"});
    this.Audio.pause()
  }

  render() {
    return (
      <div className="AudioPlayer">
        <audio ref={(Audio) => {this.Audio = Audio}}>
          <source type="audio/mp3" src={this.state.source} />
        </audio>
        <button onClick={this.state.playing ? this.pauseAudio : this.playAudio}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default AudioPlayer;
