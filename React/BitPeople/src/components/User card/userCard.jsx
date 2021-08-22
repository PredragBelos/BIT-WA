import React from 'react';
import './scss/userCard.css';
import { emailIcon, birdthdayIcon } from '../../data/data';


/*Function for create HTML elements for rendering*/
export const UserCard = ({ name, email, birthdate, image }) => {

    return (
        <div className="cardBorder">
            <div className="card">
                <div className="userImage" style={{backgroundImage: `url(${image})`}}>
                    <p>{name}</p>
                </div>

                <div className="userData">
                <p className="userEmail">{emailIcon}{email}</p>
                <p className="userBirthday">{birdthdayIcon}{birthdate}</p>
                </div>
            </div>
        </div>
    );
}