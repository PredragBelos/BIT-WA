import './App.css';
import { Redirect, Route} from 'react-router-dom';
import { Home } from '../Home/home';
import { About } from '../About/about';
import { Authors } from '../Authors/authors';
import { NewPost } from '../New post/newPost';
import { SinglePost } from '../Single post/singlePost';


function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home}/>
      <Route path="/authors" component={Authors}/>
      <Route path="/About" component={About}/>
      <Route path="/posts/new" component={NewPost}/>
      <Route path="/post/:id" component={SinglePost}/>
      
      <Redirect from="/" to="/home"/>
    
    </div>
  );
}

export default App;
