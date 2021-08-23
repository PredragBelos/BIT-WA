import React from 'react';
import { searchIcon } from '../../data/data';
import './scss/searchBox.css';

export const SearchBox = () => {
    return (
        <div className="searchBox">
            <div className="searchIcon">
                {searchIcon}
            </div>
            <div className="searchInput">
                <input type="text" name="search" placeholder="Search users" autocomplete="off"/>
            </div>
        </div>
    );
}