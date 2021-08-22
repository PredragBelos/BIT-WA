import React, { useState, useEffect } from 'react';
import { createRandomUsers } from '../../services/createUserList';
import { UserList } from '../User list/userList';
import './scss/mainSection.css';


/*Function for create HTML elements for rendering*/
export const MainSection = () => {

    /* State*/
    let [userData, setUserData] = useState([]);

    /* Life cicle*/
    useEffect(() => {
        createRandomUsers().then(users => {
            setUserData(users);
        })
    },[])

    /* Render*/
    return (
        <section className="container-flow mainSection">
            <div className="container mainSectionContainer">
                <div className="row mainSectionRow">
                    {
                        userData.map((user, index) => {
                            return (
                                <UserList name={user.getFullName()} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} key={index}/>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}