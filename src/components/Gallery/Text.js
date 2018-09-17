import React, { Component } from 'react';

class Text extends Component {
  constructor(props){
    super(props);

    this.state={
      text:""
    }
  }

  componentDidMount() {
    fetch('/Text/'+this.props.category+'/'+this.props.name+'.json')
      .then(response => response.json())
      .then(data => this.setState({text: data.text}));
  }


  render() {
    return (
      <div className="test">
      <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Text;
