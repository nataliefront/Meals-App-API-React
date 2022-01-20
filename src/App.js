import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Search from './components/Search/Search';
import Random from './components/Random/Random';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/random" component={Random} />
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;