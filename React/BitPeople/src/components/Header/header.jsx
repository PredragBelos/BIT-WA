import React, { useState } from 'react';
import { refreshIcon, userCardIcon, userListIcon } from '../../data/data';
import { aboutButtonAction, changeIcon, logoAction, refreshUsers, sendUserCardState, sendUserListState } from '../../services/headerComponentFunctions';
import './scss/header.css';


/*Function for create HTML elements for rendering*/
export const Header = ({ userListVisibility, stateOfUserList, userCardVisibility, stateOfUserCard, setRefreshState, refreshState, aboutVisibility, aboutVisibilityState }) => {

    // STATE
    const [viewIcon, setViewIcon] = useState(userCardIcon);

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
            <div className="container">
                <div className="row headerRow">
                    <div className="logo" onClick={clickOnLogo}>Bit Persons</div>
                    <div className="aboutBtn" onClick={clickOnAbout}>About</div>
                    <div className="refreshIcon" onClick={clickOnRefreshIcon}>{refreshIcon}</div>
                    <div className="styleIcon" onClick={clickOnViewIcon}>{viewIcon}</div>
                </div>
            </div>
        </header>
    );
}