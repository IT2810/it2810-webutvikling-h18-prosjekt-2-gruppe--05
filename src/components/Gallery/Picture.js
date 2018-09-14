import React, { Component } from 'react';
import axios from 'axios';


class Picture extends Component {
    constructor({category, name}) {
        super()

        this.state = {
            pictures: ""
        }

        this.getImg({category, name});
    }

    getImg = async ({category, name}) => {
          try {
            const picture = await axios.get('/Pictures/'+category+'/' + name + '.svg');
            this.setState({
              pictures: picture.data
            })
          }
          catch (error) {
            console.error(error);
          }
        }

    render() {
        console.log(this.state)
        return (  <div className = "CategoryName">
                <div dangerouslySetInnerHTML={{__html: this.state.pictures}}></div>
          </div>
        )
    }
}

export default Picture;
