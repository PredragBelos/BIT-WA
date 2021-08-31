import React from 'react';
import { Link } from 'react-router-dom';
import './scss/post.css';

export const Post = ({title, body, postId}) => {

    return(
        <div className="post">
            <Link to={`/post/${postId}`}>{title}</Link>
            <p>{body}</p>
        </div>
    )
}