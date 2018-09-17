import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

const Button = ({onClickHandler, text, children, ...rest}) => {
    if(isEmpty(text) && isEmpty(children)) {
        return null
    }

    return <button onClick={onClickHandler} {...rest}>
        <span>
            {text}{children}
        </span>
    </button>;
}

Button.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    children: PropTypes.node,
    text: PropTypes.string,
}

export default Button;
