import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
        value,
        onChangeHandler,
    } = this.props
    return (
        <div className='input'>
            <label htmlFor='taskInput'>Input task:</label>
            <input onChange={onChangeHandler} value={value} placeholder='Task to do' id='taskInput'></input>
        </div>
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
