import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  onChangeInputHandler = event => this.props.onChangeHandler(event)

  render() {
    return (
        <div className="input">
          <label>Input task:</label>
          <input onChange={this.onChangeInputHandler} value={this.props.value} placeholder='Task to do'></input>
          <button onClick={this.props.onClickHandler}>Add</button>
        </div>
    );
  }
}

Input.propTypes = {
    value: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
    onClickHandler: PropTypes.func.isRequired,
}

Input.defaultProps = {
    value: '',
}

export default Input;
