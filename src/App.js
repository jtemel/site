
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Hobbies from './components/Hobbies/Hobbies.js';
import Experience from './components/Experience/Experience.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Research from './components/Research/Research.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/hobbies" component={Hobbies} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
