import React from 'react'
import { mehIcon } from '../../data/data';
import './scss/userNotFound.css';

export const UserNotFound = () => {
    return (
        <div className="userNotFound">
            <div className="message">
                <p className="messageIcon">{mehIcon}</p>
                <p className="messageText">We couldn't find any people matching your search</p>
            </div>
        </div>
    );
}