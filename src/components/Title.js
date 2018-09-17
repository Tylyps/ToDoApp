import React from 'react';
import PropTypes from 'prop-types';

const Title = props =>  (
        <div className="app__title">
            <h2>{props.title}</h2>
        </div>
    );

Title.PropTypes = {
    title: PropTypes.string.isRequired,
}

export default Title;
