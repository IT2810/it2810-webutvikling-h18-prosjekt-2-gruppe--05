import React, { Component } from 'react';
import axios from 'axios';

class Text extends Component {
    constructor(){
        super();
        this.state={
          text:""
        }
    }

    componentDidMount(){
      this.fetchData();
    }

    componentDidUpdate(prevProps){
      if (prevProps !== this.props) {
          this.fetchData();
        }
    }

  fetchData(){
    let key = '/Text/'+this.props.category+'/'+this.props.galleryView+'.json'
    if (!sessionStorage.getItem(key)){
      axios
        .get(key)
        .then(response => {
          let td = response.data;
          let path = td.text;
          this.setState({text:path});
        sessionStorage.setItem(key, path);
      })
        .catch((error) => {
          console.error(error.response);
        });
    } else {
      let path = sessionStorage.getItem(key);
      this.setState({text:path})
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
