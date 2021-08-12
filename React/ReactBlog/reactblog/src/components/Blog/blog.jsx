import React from 'react';
import { blogs } from './blogData';
import "./blog.css";

export const Blog = () => {
    let blog = blogs.map(item => {
        return (
            <div className="blog">
                <p className="blogTitle">{item.title}</p>
                <p className="blogText">{item.text}</p>
            </div>
        );
    });
    return blog;
}
