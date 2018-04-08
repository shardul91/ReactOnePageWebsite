import React, { Component } from 'react';
import './Assets/css/scss/default.min.css';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/homePage';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
         <div className="sidebyside">
          <HomePage/>
          <Navigation/>
         </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
