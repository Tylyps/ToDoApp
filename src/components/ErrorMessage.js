import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

const ErrorMessage = ({ text }) => {
    if(isEmpty(text)) {
        return null
    }

   return  <div className="error">{text}</div>
};

ErrorMessage.defaultProps = {
}

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
}


export default ErrorMessage;
