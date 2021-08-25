import React from 'react';
import './scss/footer.css';

/*Function for create HTML elements for rendering*/
export const Footer = ({ refreshState }) => {

    return (
        <footer className="container-flow">
            <div className="container footerContainer">
                <div className="row footerRow">
                    <p className="logo">2021 Copyright BIT</p>
                    <p></p>
                </div>
            </div>
        </footer>
    );
}