import './App.css';
import { Redirect, Route} from 'react-router-dom';
import { Home } from '../Home/home';


function App() {
  return (
    <div className="App">
      <Route path="/home" component={Home}/>
      
      <Redirect from="/" to="/home"/>
    </div>
  );
}

export default App;
