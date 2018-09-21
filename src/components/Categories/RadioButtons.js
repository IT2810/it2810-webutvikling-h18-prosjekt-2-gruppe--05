import React, { Component } from 'react';


class RadioButtons extends Component {
  constructor() {
    super();

    this.state = {
      option: "option1"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState ({
      option: event.target.value
    });
  }

  render() {
    return (
      <div className="RadioButtons">
      <p>{this.props.media_type}</p>
      <form>
      <ul>
        <li>
          <label>
            <input type="radio" value="option1"
            checked={this.state.option === "option1"}
            onChange={this.handleChange}
            onClick={() => this.props.triggerParentUpdate(1)}
            />
            {this.props.option1}
            <span class="checkmark"></span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="option2"
            checked={this.state.option === "option2"}
            onChange={this.handleChange}
            onClick={() => this.props.triggerParentUpdate(2)}
            />
            {this.props.option2}
            <span class="checkmark"></span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" value="option3"
            checked={this.state.option === "option3"}
            onChange={this.handleChange}
            onClick={() => this.props.triggerParentUpdate(3)}
            />
            {this.props.option3}
            <span class="checkmark"></span>
          </label>
        </li>
      </ul>
      </form>
      </div>
    );
  }
}

export default RadioButtons;
