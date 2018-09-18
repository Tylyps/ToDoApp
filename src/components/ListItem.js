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
    children: PropTypes.node,
}
List.defaultProps = {
    children: null,
}

export default List;
