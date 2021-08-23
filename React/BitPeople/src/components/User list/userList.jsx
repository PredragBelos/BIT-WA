import React from 'react';
import { birdthdayIcon, emailIcon } from '../../data/data';
import { checkGender } from '../../services/publicFunctions';
import './scss/userList.css';


/*Function for create HTML elements for rendering*/
export const UserList = ({ name, email, birthdate, image, gender }) => {

    return (
        <div className={`userListBox ${checkGender(gender)}`}>

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