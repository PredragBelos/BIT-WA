import { useEffect, useState } from 'react';
import { postList } from '../../services/createPostList';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { Post } from '../Post/post';
import './scss/home.css';

export const Home = () => {

    /*State*/
    const [postData, setPostData] = useState([]);

    /*Lifecicle*/
    useEffect(() => {

        /*Create post data*/
        postList().then(post => {
            setPostData(post);
        });

    }, []);


    return (
        <>
            <Header />
            <div className="container posts">
                <h1>POSTS</h1>
                {
                    postData.map(item => {
                        return <Post title={item.title} body={item.body} postID={item.id}/>
                    })
                }
            </div>
            <Footer />
        </>
    );
}