import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, tag: CustomTag }) => (
        <div className="app__title">
            <CustomTag>{text}</CustomTag>
        </div>
    );

Title.PropTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string,
}
Title.defaultProps = {
    tag: 'h1',
}

export default Title;
