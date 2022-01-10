import { Router } from '@reach/router';
import './App.module.scss';
import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Containers/Home/Home';

function App() {
  return (
    <>
    < NavBar/>
    < Home />
    </>
  );
  
}


// create a home page, log in, Favourites 
// create a navbar with links to the 3 pages 
// implement routing 
//  add NotFound page 

export default App;
