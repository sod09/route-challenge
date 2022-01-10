import React from 'react';
import styles from './NavBar.module.scss';
import {Link} from '@reach/router'

export const NavBar = () => {
  return (
    <nav className={styles.nav} >
    
    <Link to="/">
      <div>
        Home
      </div>
    </Link>

    <Link to="login">
      <div>
      LogIn
      </div>
   </Link>

    <Link to="favourites">
      <div>
      Faves
      </div>
    </Link>
    
  </nav>
  )
}

export default NavBar