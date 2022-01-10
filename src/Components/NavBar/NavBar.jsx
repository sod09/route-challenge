import React from 'react';
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <nav className={styles.nav} >
    <div>
      Home
    </div>
     <div>
     LogIn
   </div>
    <div>
    Faves
  </div>
  </nav>
  )
}
