import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postList } from '../../services/createPostList';
import { usersList } from '../../services/createUserList';
import { selectResult, setAuthorName } from '../../shared/singlePostFunctions';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import './scss/singlePost.css';


export const SinglePost = () => {

    const [postObject, setPostObject] = useState({});
    const [userArr, setUserArr] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {

        /*Create user data*/
        usersList().then(users => {
            setUserArr(users);
        })


        /*Set post object base on URL*/
        const postId = parseInt(document.baseURI.split("/").slice(-1));

        postList().then(items => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === postId) {
                    setPostObject(items[i]);
                }
            }
        });


        /*Create post data*/
        postList().then(posts => {
            setFilteredPosts(posts.filter(item => {
                return item.userId === postObject.userId;
            }));
        })

    }, [postObject.userId]);


    /*Function for set author name*/
    setAuthorName(userArr, postObject);

    return (
        <>
            <Header />
            <div className=" container singlePost">
                <div className="row titleRow">
                    <h1>{selectResult(postObject.title).toUpperCase()}</h1>
                    <Link to="#">{selectResult(postObject.userName)}</Link>
                </div>

                <div className="row bodyRow">
                    <p>{selectResult(postObject.body)}</p>
                </div>

                <div className="row otherPosts">
                <h3>{filteredPosts.length - 1} more posts from same author</h3>
                <ul>
                    {
                      filteredPosts.filter(post => {
                          return post.id !== postObject.id;
                      }).map((value, index) => {
                          return (
                              <li key={index}>Title {value.id} - {value.title}</li>
                          )
                      })  
                    }
                </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}