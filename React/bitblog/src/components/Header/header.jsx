import React from 'react';
import { Link } from 'react-router-dom';
import './scss/header.css';

export const Header = () => {
    return (
        <header className="container-flow">
            <div className="container headerContainer">
                <div className="row headerRow">
                    <div className="logo defaultMB">
                        <p className="defaultMB">BIT BLOG</p>
                    </div>
                    <nav className="navBar defaultMB">
                        <div className="home defaultMB center">
                            <Link to="/home">Home</Link>
                        </div>

                        <div className="authors defaultMB center">
                            <Link to="/authors" className="defaultMB">Authors</Link>
                        </div>
                        
                        <div className="about defaultMB center">
                            <Link to="/about" className="defaultMB">About</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}