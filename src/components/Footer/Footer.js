
import React from 'react';

import {
  Container,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import styles from './Footer.module.css';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container disableGutters>
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <Grid container justify="center" alignItems="center" spacing={0}>
              <Grid item xs={4} >
                <a href="https://www.instagram.com/thirtythreecollection" target="_blank"> 
                  <IconButton className={styles.cartButton} aria-label="instagram">
                    <InstagramIcon />
                  </IconButton>
                </a>
              </Grid>
              <Grid item xs={4} >
                <a href="https://www.facebook.com/ThirtyThreeCollectionCandles" target="_blank"> 
                  <IconButton className={styles.cartButton} aria-label="instagram">
                    <FacebookIcon />
                  </IconButton>
                </a>
              </Grid>
              <Grid item xs={4} >
                <a href="https://www.facebook.com/ThirtyThreeCollectionCandles" target="_blank"> 
                  <IconButton className={styles.cartButton} aria-label="instagram">
                    <FacebookIcon />
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
