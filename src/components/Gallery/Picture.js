import React, { Component } from 'react';
import axios from 'axios';

class Picture extends Component {
    constructor() {
        super();
        this.state = {
          pictures: ""
        }
    }

    componentDidMount(){
      this.fetchData();
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
          this.fetchData();
        }
    }

    fetchData () {
      let key = '/Pictures/'+this.props.category+'/' + this.props.galleryView + '.svg'
      if(!sessionStorage.getItem(key)) {
        axios
          .get(key)
          .then(response => {
            let path = response.data;
            this.setState({pictures: path});
          sessionStorage.setItem(key, path);
        })
          .catch ((error) => {
            console.error(error.response);
          });
        } else {
          let path = sessionStorage.getItem(key);
          this.setState({pictures:path})
        }
    }

    render() {
        return <div className = "CategoryName">
          <div className="svgPicture" dangerouslySetInnerHTML={{__html: this.state.pictures}}></div>
        </div>
    }
}

export default Picture;
