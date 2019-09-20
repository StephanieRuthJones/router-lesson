import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';


import Home from './components/Home'
import About from './components/About'
import List from './components/List'
import AppNotFound from './components/AppNotFound'


class App extends Component {
  constructor() {
    super();
    this.state = {
      animalList: ["frog", "dog", "cat", "monkey"]
    }
  }

  render() {

    return (

      <div className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about/">About</Link>
        <Link className="link" to="/list/">List</Link>
      </div>


    );
  }
}

export default App;


