import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
