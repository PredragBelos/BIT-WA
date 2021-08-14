import React from 'react';
import "./blog.css";
import PropTypes from 'prop-types';

export const Blog = ({title, text}) => {

    return (
        <div className="blog">
            <p className="blogTitle">{title}</p>
            <p className="blogText">{text}</p>
        </div>
    );
}

Blog.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired, 
}

