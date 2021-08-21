import { BlogBox } from '../Blog Box/blogBox';
import { Header } from '../Header/header';
import './App.css';

/* Function who create HTML element for render */
function App() {
  return (
    <div className="App">
      <Header/>
      <BlogBox/>
    </div>
  );
}

export default App;
