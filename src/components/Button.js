import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClickHandler, text, ...rest}) => <button onClick={onClickHandler} {...rest}>{text}</button>;

Button.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
}
Button.defaultProps = {
}

export default Button;
