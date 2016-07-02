import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Section/Header.jsx';
import Hero from './Section/Hero.jsx';
import Tumbnail from './Section/Tumbnail.jsx';
import Footer from './Section/Footer.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Tumbnail />
        <Footer />
      </div>
    );
  }
}
