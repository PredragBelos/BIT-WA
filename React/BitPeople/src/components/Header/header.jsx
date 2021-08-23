import React, { useState } from 'react';
import { refreshIcon, userListIcon } from '../../data/data';
import { changeIcon, sendUserCardState, sendUserListState } from '../../services/headerComponentFunctions';
import './scss/header.css';


/*Function for create HTML elements for rendering*/
export const Header = ({ userListVisibility, stateOfUserList, userCardVisibility, stateOfUserCard }) => {

    // STATE
    const [viewIcon, setViewIcon] = useState(userListIcon);

    /* Function for change state of viewIcon and visibility of userList and userCard*/
    const clickOnViewIcon = () => {
        changeIcon(viewIcon, setViewIcon);
        sendUserListState(stateOfUserList, userListVisibility);
        sendUserCardState(stateOfUserCard, userCardVisibility);
    }

    // RENDER
    return (
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <p className="logo">Bit Persons</p>
                    <div className="icon">{refreshIcon}</div>
                    <div className="icon" onClick={clickOnViewIcon}>{viewIcon}</div>
                </div>
            </div>
        </header>
    );
}