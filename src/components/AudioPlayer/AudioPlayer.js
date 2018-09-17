import React, { Component } from 'react';
import "./AudioPlayer.css";

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

  playAudio(){
    console.log("Playing audio, maybe?");
    this.setState({ playing: true });
    this.setState({ buttonText: "Pause"});
    this.Audio.pause()
    this.Audio.load()
    this.Audio.play()
  }

  pauseAudio(){
    console.log("Pausing audio, maybe?");
    this.setState({ playing: false});
    this.setState({ buttonText: "Play"});
    this.Audio.pause()
  }
  /*
  componentDidMount(props){

  }
  componentDidUpdate(prevProps, prevState){ 

  }

  getSound(category){
    
  }
  Use this.props.category and this.props.tabnr in source later.
*/
  render() {
    return (
      <div className="AudioPlayer">
        <audio ref={(Audio) => {this.Audio = Audio}}>
          <source type="audio/mp3" src={"Sounds/Funny/Baby.mp3"} />
        </audio>
        <button onClick={this.state.playing ? this.pauseAudio : this.playAudio}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default AudioPlayer;