import React from 'react'
import { Author } from '../Author/author';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import './scss/authors.css';

export const Authors = () => {
    return (
        <>
            <Header />
            <div className="container authorsSection">
                <h1>AUTHORS(6)</h1>
                <Author />
                <Author />
                <Author />
                <Author />

            </div>
            <Footer />
        </>
    );
}