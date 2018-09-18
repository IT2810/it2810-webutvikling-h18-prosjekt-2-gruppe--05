import React, { Component } from 'react';

class Text extends Component {
  constructor(props){
    super(props);

    this.state={
      text:""
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props && !this.props.category==0) {
      this.componentDidMount();
    }
  }

  componentDidMount() {
    console.log(this.props)
    if(this.props.category != 0){
      fetch('http://localhost:3000/Text/'+this.props.category+'/'+this.props.galleryView+'.json')
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({text: data.text}))
        .catch((error) => {
            throw error;
          });
        }
      }


  render() {
    return (
      <div className="text">
      <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Text;
