import React from 'react';
import { Router } from "@reach/router";

import Home from "../Home";
import Favourites from "../Favourites";
import LogIn from '../LogIn';
import NotFound from '../../Components/NotFound';

const Routes = () => {
  return (
    <Router>
    <Home path="/" />
    <Favourites path="favourites"/>
    <LogIn path="login" />
    <NotFound default />
  </Router>
  )
}

export default Routes
