import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { Post } from '../Post/post';
import './scss/home.css';

export const Home = () => {

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