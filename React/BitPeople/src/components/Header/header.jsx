import React, { useState } from 'react';
import { refreshIcon, userListIcon } from '../../data/data';
import { aboutButtonAction, changeIcon, logoAction, refreshUsers, sendUserCardState, sendUserListState } from '../../services/headerComponentFunctions';
import './scss/header.css';


/*Function for create HTML elements for rendering*/
export const Header = ({ userListVisibility, stateOfUserList, userCardVisibility, stateOfUserCard, setRefreshState, refreshState, aboutVisibility, aboutVisibilityState }) => {

    // STATE
    const [viewIcon, setViewIcon] = useState(userListIcon);

    /* Function for change state of viewIcon and visibility of userList and userCard*/
    const clickOnViewIcon = () => {
        changeIcon(viewIcon, setViewIcon);
        sendUserListState(stateOfUserList, userListVisibility);
        sendUserCardState(stateOfUserCard, userCardVisibility);
    }

    /* Function for refresh data after click*/
    const clickOnRefreshIcon = () => {
        refreshUsers(refreshState, setRefreshState);
    }

    /* Function on about button*/
    const clickOnAbout = () => {
        aboutButtonAction(aboutVisibilityState, aboutVisibility);
    }

    /* Function on LOGO */
    const clickOnLogo = () => {
        logoAction(aboutVisibilityState, aboutVisibility);
    }

    // RENDER
    return (
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <p className="logo" onClick={clickOnLogo}>Bit Persons</p>
                    <div className="aboutBtn" onClick={clickOnAbout}>About</div>
                    <div className="icon" onClick={clickOnRefreshIcon}>{refreshIcon}</div>
                    <div className="icon" onClick={clickOnViewIcon}>{viewIcon}</div>
                </div>
            </div>
        </header>
    );
}