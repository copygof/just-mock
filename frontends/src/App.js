import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'

import { Header } from './components/Header'
import { Banner } from './components/Banner'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
    );
  }
}

export default App;
