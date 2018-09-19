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
      this.getImg();
    }

    componentDidUpdate(prevProps) {
      console.log(this.props)
      if (prevProps != this.props && !this.props.category==0) {
        if (sessionStorage.getItem('/Pictures/'+this.props.category+'/' + this.props.galleryView + '.svg') === null) {
          this.getImg();
        }
        else {
          this.setState(({pictures: sessionStorage.getItem('/Pictures/'+this.props.category+'/' + this.props.galleryView + '.svg')}))
        }
      }
    }

    componentWillUpdate(nextProps) {
      if(this.props.allSelected){
      sessionStorage.setItem('/Pictures/'+this.props.category+'/' + this.props.galleryView + '.svg', this.state.pictures)
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
