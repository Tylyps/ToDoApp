import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
        value,
        onChangeHandler,
    } = this.props
    return (
        <React.Fragment>
            <label htmlFor='taskInput'>Input task:</label>
            <input onChange={onChangeHandler} value={value} placeholder='Task to do' id='taskInput'></input>
        </React.Fragment>
    );
  }
}

Input.propTypes = {
    value: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
}

Input.defaultProps = {
    value: '',
}

export default Input;
