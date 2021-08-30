import React, { useEffect, useState } from 'react';
import { Blog } from '../../entities/blog';
import { createBlogs } from '../../services/createBlogs';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { Post } from '../Post/post';
import './scss/home.css';

export const Home = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        
    },[])




    return(
        <>
        <Header/>
        <div className="container posts">
            <h1>POSTS</h1>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
        <Footer/>
        </>
    );
}