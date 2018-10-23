import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

const ErrorMessage = ({ text, children, ...rest }) => {
    if(isEmpty(text) && isEmpty(children)) {
        return null
    }

   return  <div className="error" {...rest}>{text}</div>
};

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
}
ErrorMessage.defaultProps = {
    children: null,
}

export default ErrorMessage;
