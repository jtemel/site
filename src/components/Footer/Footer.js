
import React from 'react';

import {
  Container,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import NoteIcon from '@material-ui/icons/Note';

import styles from './Footer.module.css';

export default class Footer extends React.Component {
  render() {
    return (
      <Container disableGutters>
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <Grid container justify="center" alignItems="center" spacing={0}>
              <Grid item xs={4} >
                <a
                  href="https://ca.linkedin.com/in/jonathon-temelkovski"
                  target="_blank"
                  rel="noreferrer"
                > 
                  <IconButton className={styles.cartButton} aria-label="linkedin">
                    <LinkedInIcon />
                  </IconButton>
                </a>
              </Grid>
              <Grid item xs={4} >
                <a
                  href="https://github.com/jtemel/"
                  target="_blank"
                  rel="noreferrer"
                > 
                  <IconButton className={styles.cartButton} aria-label="github">
                    <GitHubIcon />
                  </IconButton>
                </a>
              </Grid>
              <Grid item xs={4} >
                <a
                  href="https://google.ca"
                  target="_blank"
                  rel="noreferrer"
                > 
                  <IconButton className={styles.cartButton} aria-label="resume">
                    <NoteIcon />
                  </IconButton>
                </a>
              </Grid>
            </Grid>
          </div>
          <div className={styles.copyright}>
            <Typography>Jonathon Temelkovski &copy; 2021</Typography>
          </div>
        </div>
      </Container>
    );
  }
}
