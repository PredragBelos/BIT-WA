import React, { useState, useEffect } from 'react';
import { createRandomUsers } from '../../services/createUserList';
import { UserCard } from '../User card/userCard';
import { UserList } from '../User list/userList';
import './scss/mainSection.css';


/*Function for create HTML elements for rendering*/
export const MainSection = ({ visibilityOfUserList, visibilityOfUserCard, refreshState }) => {

    //STATE
    let [userData, setUserData] = useState([]);
    

    // LIFE CYCLE
   useEffect(() => {
    createRandomUsers().then(users => {
        setUserData(users);
    })
   },[refreshState])

    

    //RENDER
    return (
        <section className="container-flow mainSection">
            <div className="container mainSectionContainer">
                <div className="row mainSectionRow">
                    <div className={`userList ${visibilityOfUserList}`}>
                        {
                            userData.map((user, index) => {
                                return (
                                    <UserList name={user.getFullName()} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} gender={user.gender} key={index} />
                                );
                            })
                        }
                    </div>

                    <div className={`userCards ${visibilityOfUserCard}`}>
                        {
                            userData.map((user, index) => {
                                return (
                                    <UserCard name={user.name} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} gender={user.gender} key={index} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}