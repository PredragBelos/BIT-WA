import React, { useState, useEffect } from 'react';
import { createRandomUsers } from '../../services/createUserList';
import { SearchBox } from '../Search box/searchBox';
import { UserCard } from '../User card/userCard';
import { UserList } from '../User list/userList';
import './scss/mainSection.css';


/*Function for create HTML elements for rendering*/
export const MainSection = ({ visibilityOfUserList, visibilityOfUserCard, refreshState }) => {

    //STATE
    let [userData, setUserData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);


    // LIFE CYCLE
    useEffect(() => {
        createRandomUsers().then(users => {
            setUserData(users);
            setSearchResult(users);
        })
    }, [refreshState])


    //FUNCTIONS

    /*Function for searchData*/
    const searchResultProp = searchResult => (setSearchResult(searchResult));

    
    //RENDER
    return (
        <section className="container-flow mainSection">
            <div className="container mainSectionContainer">
                <div className="row searchRow">
                    <SearchBox
                        searchResult={searchResult}
                        setSearchResult={searchResultProp}
                        userData={userData} />
                </div>
                <div className="row mainSectionRow">

                    <div className={`userList ${visibilityOfUserList}`}>
                        {
                            (userData.length === searchResult.length)
                                ? userData.map((user, index) => {
                                    return (
                                        <UserList name={user.getFullName()} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} gender={user.gender} key={index} />
                                    );
                                })
                                : searchResult.map((user, index) => {
                                    return (
                                        <UserList name={user.getFullName()} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} gender={user.gender} key={index} />
                                    );
                                })
                        }
                    </div>

                    <div className={`userCards ${visibilityOfUserCard}`}>
                        {
                            (userData.length === searchResult.length)
                                ? userData.map((user, index) => {
                                    return (
                                        <UserCard name={user.name} email={user.hideEmail()} birthdate={user.showFormatedDate()} image={user.image} gender={user.gender} key={index} />
                                    );
                                })
                                : searchResult.map((user, index) => {
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