import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
        value,
        onChangeHandler,
        name,
        className,
        ...rest,
    } = this.props
    return (
        <div className={className}>
            <label htmlFor={name}>Input task:</label>
            <input onChange={onChangeHandler} value={value} placeholder='Task to do' id={name} {...rest}/>
        </div>
    );
  }
}

Input.propTypes = {
    value: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

Input.defaultProps = {
    value: '',
}

export default Input;
