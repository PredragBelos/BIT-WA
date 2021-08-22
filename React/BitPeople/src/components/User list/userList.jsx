import React from 'react';
import { birdthdayIcon, emailIcon } from '../../data/data';
import './scss/userList.css';


/*Function for create HTML elements for rendering*/
export const UserList = ({ name, email, birthdate, image }) => {

    return (
        <div className="userListBox">

            <div className="userImage">
                <img src={image} alt="img..." />
            </div>

            <div className="userData">
                <p className="userName">{name}</p>
                <p className="userEmail">{emailIcon}{email}</p>
                <p className="userBirthday">{birdthdayIcon}{birthdate}</p>
            </div>

        </div>
    );
}