
import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'; 

import MenuIcon from '@material-ui/icons/Menu';
import TelegramIcon from '@material-ui/icons/Telegram';

import styles from './Navbar.module.css';

import logo from '../../images/logo_transparent_mid.png';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);

    this.state = {
      open: false
    };
  }

  toggleDrawer(isOpen) {
    return (e) => this.setState({ open: isOpen });
  }

  render() {
    return (
      <div>
        <AppBar className={styles.appBar} color="primary" position="static">
          <Container color="primary" maxWidth='lg'>
            <Toolbar>
              <IconButton edge="start" className={styles.menuButton} aria-label="menu" onClick={this.toggleDrawer(true)}>
                <MenuIcon/>
              </IconButton>
              <Link className={styles.logo} to="/">
                <img className={styles.logo} src={logo} alt="jt-logo"/>
              </Link>
              <Link to="/contact">
                <IconButton edge="start" className={styles.menuButton} aria-label="menu">
                  <TelegramIcon/>
                </IconButton>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          className={styles.menuDrawer}
          anchor="top"
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
          classes={{paper: styles.drawerPaper}}
        >
          <div role="presentation" onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
            <List>
              <Link className={styles.link} to="/">
                <ListItem button>
                  <ListItemText primary="Home"/>
                </ListItem>
              </Link>
              <Divider/>
              <Link className={styles.link} to="/experience">
                <ListItem button>
                  <ListItemText primary="Experience"/>
                </ListItem>
              </Link>
              <Link className={styles.link} to="/projects">
                <ListItem button>
                  <ListItemText primary="Projects"/>
                </ListItem>
              </Link>
              <Link className={styles.link} to="/research">
                <ListItem button>
                  <ListItemText primary="Research"/>
                </ListItem>
              </Link>
              <Divider/>
              <Link className={styles.link} to="/hobbies">
                <ListItem button>
                  <ListItemText primary="Hobbies"/>
                </ListItem>
              </Link>
              <Link className={styles.link} to="/contact">
                <ListItem button>
                  <ListItemText primary="Contact"/>
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
