
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Hobbies from './components/Hobbies/Hobbies.js';
import Education from './components/Education/Education.js';
import Experience from './components/Experience/Experience.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Research from './components/Research/Research.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

import mainStyles from './index.module.css';

function App() {
  return (
    <Router>
      <div className={mainStyles.page}>
        <Navbar />
        <Footer />
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/hobbies" component={Hobbies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
