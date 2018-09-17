import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClickHandler, text, children, ...rest}) => <button onClick={onClickHandler} {...rest}>{text}{children}</button>;

Button.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    children: PropTypes.node,
    text: PropTypes.string,
}

export default Button;
