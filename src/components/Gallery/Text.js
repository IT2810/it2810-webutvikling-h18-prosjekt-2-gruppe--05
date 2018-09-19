import React, { Component } from 'react';

class Text extends Component {
  constructor(props){
    super(props);

    this.state={
      text:""
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props && this.props.category != 0) {
      console.log("JUST BEFORE FETCH")
      if (!sessionStorage.getItem('http://localhost:3000/Text/'+this.props.category+'/'+this.props.galleryView+'.json')) {
        this.fetchData();
      }
      else {
        this.setState(({text: sessionStorage.getItem('http://localhost:3000/Text/'+this.props.category+'/'+this.props.galleryView+'.json')}))
      }
    }
  }

  componentWillUpdate(nextProps) {
    if(this.props.allSelected){
    sessionStorage.setItem('http://localhost:3000/Text/'+this.props.category+'/'+this.props.galleryView+'.json', this.state.text)
  }
  }

  fetchData() {
    console.log(this.props.allSelected)
    if(this.props.allSelected){
      fetch('http://localhost:3000/Text/'+this.props.category+'/'+this.props.galleryView+'.json')
        .then(response => {
          if (response.ok) {
            return response.json()
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
