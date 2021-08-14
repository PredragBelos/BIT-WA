import React from 'react';
import './blogBox.css';
import { Blog } from '../Blog/blog';
import { blogs } from '../Blog/blogData';

export const BlogBox = () => {
    return (
        <div className="blogBox">
            {
                blogs.map((blog, index) => {

                    return (
                    <Blog title={blog.title} text={blog.text} key={index} />
                    )

                })
            }
        </div>
    )
}