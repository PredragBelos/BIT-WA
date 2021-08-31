import React from 'react';
import { Link } from 'react-router-dom';
import './scss/post.css';

export const Post = ({title, body}) => {
    return(
        <div className="post">
            <Link>{title}</Link>
            <p>{body}</p>
        </div>
    )
}