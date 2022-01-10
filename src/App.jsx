import { Router } from '@reach/router';
import styles from './App.module.scss'

import NavBar from "./Components/NavBar";

import Routes from "./Containers/Routes"

function App() {
  return (

    <>
   
    < NavBar />

    <section className={styles.content}><Routes /></section>

    </>

  );
  
}


// create a home page, log in, Favourites 
// create a navbar with links to the 3 pages 
// implement routing 
//  add NotFound page 

export default App;
