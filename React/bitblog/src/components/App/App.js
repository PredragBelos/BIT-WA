import './App.css';
import { Redirect, Route} from 'react-router-dom';
import { Home } from '../Home/home';
import { About } from '../About/about';
import { Authors } from '../Authors/authors';


function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home}/>
      <Route path="/authors" component={Authors}/>
      <Route path="/About" component={About}/>
      
      <Redirect from="/" to="/home"/>
    </div>
  );
}

export default App;
