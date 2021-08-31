import React, { useEffect, useState } from 'react'
import { usersList } from '../../services/createUserList';
import { Author } from '../Author/author';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import './scss/authors.css';

export const Authors = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {

        /*Create users data*/
        usersList().then(user => {
            setUserData(user);
        });
    }, []);

    

    return (
        <>
            <Header />
            <div className="container authorsSection">
                <h1>AUTHORS</h1>
                {
                  userData.map((value,index) => {
                      return <Author name={value.name} key={index}/>
                  })  
                }


            </div>
            <Footer />
        </>
    );
}