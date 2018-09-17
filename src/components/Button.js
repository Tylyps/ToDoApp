import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClickHandler, children, ...rest}) => <button onClick={onClickHandler} {...rest}>{children}</button>;

Button.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}

export default Button;
