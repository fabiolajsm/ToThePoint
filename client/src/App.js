import React from 'react';
import { Route, Switch } from "react-router-dom";
import LandingPage from '../src/components/LandingPage/LandingPage';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </>
  )
};