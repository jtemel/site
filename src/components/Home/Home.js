
import React from 'react';

import { Typography } from '@material-ui/core';

import styles from './Home.module.css';

export default class Home extends React.Component {
  render() {

    return (
      <div className={styles.can}>
        <Typography className={styles.title} variant="h2">
          Jonathon Temelkovski
        </Typography>
        <Typography className={styles.title} variant="h6">
          Student &amp; Developer
        </Typography>
      </div>
    );
  }
}
