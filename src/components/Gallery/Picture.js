import React, { Component } from 'react';
import axios from 'axios';


class Picture extends Component {
    constructor() {
        super();
        this.state = {
            pictures: "",
            name: ""
        }
    }

    componentDidMount(){
      this.getImg();
    }

    componentDidUpdate(prevProps) {
      console.log(this.props)
      if (prevProps != this.props && !this.props.category==0) {
        this.getImg();
      }
    }

    async getImg () {
          try {
            if(this.props.allSelected) {
              const picture = await axios.get('/Pictures/'+this.props.category+'/' + this.props.galleryView + '.svg');
              this.setState({
                pictures: picture.data
              });
            } else{
              const picture = await axios.get('/Pictures/0/placeholder.svg');
              this.setState({
                pictures: picture.data
              });
            }
          }
          catch (error) {
            console.error(error);
          }
        }


    render() {
        return <div className = "CategoryName">
          <div className="svgPicture" dangerouslySetInnerHTML={{__html: this.state.pictures}}></div>
        </div>
    }
}

export default Picture;
