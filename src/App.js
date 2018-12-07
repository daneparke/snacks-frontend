import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Snack from './components/Snack'
import Login from './components/Login'
import Edit from './components/Edit'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <>
        <Route path='/' exact render={() => (<Login {...this.state} />)} />
        <Route path='/home' render={() => (<Home {...this.state} />)} />
        <Route path='/snack' render={() => (<Snack {...this.state} />)} />
        <Route path='/snack/edit' render={() => (<Edit {...this.state} />)} />
      </>
    );
  }
}

export default App;
