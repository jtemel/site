
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Particles from 'react-tsparticles';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
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
        <Particles
          id="tsparticles"
          fullscreen
          options={{
            background: {
              color: {
                value: "#efefef"
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            fullScreen: {
              enable: true,
              zIndex: -100,
            },
            particles: {
              color: {
                value: "#000",
              },
              links: {
                color: "#5f5f5f",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: ["circle", "polygon", "square"],
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Footer />
        <Switch>
          <Route exact path="/" component={Home} />
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
