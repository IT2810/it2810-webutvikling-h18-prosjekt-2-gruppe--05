import React, { Component } from 'react';
import RadioButtons from './RadioButtons'

class Categories extends Component {


  render() {
    return (
      <div className="Categories">
        <RadioButtons media_type="Picture"
        option1="Food"
        option2="Transport"
        option3="Seacreatures"
        triggerParentUpdate={this.props.triggerParentUpdatePicture}


        />
        <RadioButtons media_type="Sound"
        option1="Scary"
        option2="Nature"
        option3="Funny"
        triggerParentUpdate={this.props.triggerParentUpdateAudio}

        />
        <RadioButtons media_type="Text"
        option1="Quotes"
        option2="Tongue Twisters"
        option3="Dad Jokes"
        triggerParentUpdate={this.props.triggerParentUpdateText}
        />
      </div>
    );
  }
}

export default Categories;
