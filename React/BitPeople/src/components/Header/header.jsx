import React, { useState } from 'react';
import { refreshIcon, userListIcon, userCardIcon } from '../../data/data';
import './scss/header.css';


/*Function for create HTML elements for rendering*/
export const Header = () => {

    const [viewIcon, setViewIcon] = useState(userListIcon);

    /* Function for change state of viewIcon*/
    const viewIconOnClick = () => {
       if(viewIcon === userListIcon) {
        setViewIcon(userCardIcon);
       }
       else{
        setViewIcon(userListIcon); 
       }
    }
    
    return(
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <p className="logo">Bit Persons</p>
                    <div className="icon">{refreshIcon}</div>
                    <div className="icon" onClick={viewIconOnClick}>{viewIcon}</div>
                </div>
            </div>
        </header>
    );
}