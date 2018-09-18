import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

const List = ({ text, children, ...rest }) => {
    if(isEmpty(text) && isEmpty(children)) {
        return null
    }

   return  <li {...rest}>{text}{children}</li>
};

List.propTypes = {
    text: PropTypes.string.isRequired,
    tag: PropTypes.string,
}
List.defaultProps = {
}

export default List;
