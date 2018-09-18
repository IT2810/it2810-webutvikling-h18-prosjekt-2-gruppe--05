import React, { Component } from 'react';

class AudioPlayer extends Component {
  constructor(props){
    super(props);

    this.state = {
      playing: false,
      buttonText: "Play"
    }

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);

  }

  componentWillReceiveProps(prevProps, nextProps){
    if(prevProps.category !== nextProps.category 
      || prevProps.galleryView !== nextProps.galleryView){
        this.pauseAudio();
      }
  }

  playAudio(){
    if(this.props.category === 0){
      alert("Please select a sound category first.")
    } else {
      this.setState({ playing: true });
      this.setState({ buttonText: "Pause"});
      this.Audio.pause()
      this.Audio.load()
      this.Audio.play()
    }
  }

  pauseAudio(){
    console.log("Pausing audio, maybe?");
    this.setState({ playing: false});
    this.setState({ buttonText: "Play"});
    this.Audio.pause()
  }

  render() {
    return (
      <div className="AudioPlayer">
        <audio ref={(Audio) => {this.Audio = Audio}}>
          <source type="audio/mp3" src={"Sounds/" + this.props.category + "/" + this.props.galleryView + ".mp3"} />
        </audio>
        <button onClick={this.state.playing ? this.pauseAudio : this.playAudio}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default AudioPlayer;
