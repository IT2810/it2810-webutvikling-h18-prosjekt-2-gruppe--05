import React, { Component } from 'react';
import RadioButtons from './RadioButtons'

class Categories extends Component {

  render() {
    return (
      <div className="categories">
        <RadioButtons media_type="Picture"
        option1="Food"
        option2="Transport"
        option3="Seacreatures"
        />
        <RadioButtons media_type="Sound"
        option1="Scary"
        option2="Nature"
        option3="Funny"
        />
        <RadioButtons media_type="Text"
        option1="Quotes"
        option2="Tongue Twisters"
        option3="Dad Jokes"
        />
      </div>
    );
  }
}

export default Categories;

/*
constructor(props) {
    super(props)
    this.state = {
      textCategory: props.text,
    }
  }
  */

  /*Categories Component
  {/*<Galleri tekst={this.state.textCategory} /> } */

/*
