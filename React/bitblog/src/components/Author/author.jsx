import React from 'react';
import { Link } from 'react-router-dom';
import './scss/author.css';

export const Author = ({name}) => {
    return (
        <div className="author">
            <Link>{name}</Link>
        </div>
    );
}