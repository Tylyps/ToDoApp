import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, tag: CustomTag }) => <CustomTag className='title'>{text}</CustomTag>;

Title.propTypes = {
    text: PropTypes.string.isRequired,
    tag: PropTypes.string,
}
Title.defaultProps = {
    tag: 'h1',
}

export default Title;
