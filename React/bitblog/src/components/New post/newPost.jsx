import React from 'react';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import './scss/newPost.css';
import { Link } from 'react-router-dom';

export const NewPost = () => {
    return (
        <>
            <Header />
            <div className="container newPost">
                <div className="row postHeading">
                    <h1>NEW POST</h1>
                </div>

                <div className="row postTitle">
                    <p>Title</p>
                    <input type="text" name="title"/>
                </div>

                <div className="row postContentText">
                    <p>Content</p>
                    <textarea name="content" cols="30" rows="10"></textarea>
                </div>

                <div className="row postButtons">
                    <button><Link to="/home">Cancel</Link></button>
                    <button><Link to="/home">Save</Link></button>
                </div>
            </div>
            <Footer />
        </>

    );
}