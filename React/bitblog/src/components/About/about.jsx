import React from 'react'
import { AboutContent } from '../About content/aboutContent';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';

export const About = () => {
    return (
        <>
            <Header />
            <div className="container aboutSec">
                <AboutContent/>
            </div>
            <Footer />
        </>
    );
}