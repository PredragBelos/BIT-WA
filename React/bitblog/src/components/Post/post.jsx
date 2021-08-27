import React from 'react';
import { Link } from 'react-router-dom';
import './scss/post.css';

export const Post = () => {
    return(
        <div className="post">
            <Link>Title</Link>
            <p>Text prvog posta</p>
        </div>
    )
}