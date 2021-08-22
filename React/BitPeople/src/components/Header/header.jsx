import React from 'react';
import './scss/header.css';


/*Function for create HTML elements for rendering*/
export const Header = () => {
    
    return(
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <p className="logo">Bit Persons</p>
                </div>
            </div>
        </header>
    );
}