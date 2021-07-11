
import React from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

import styles from './PortfolioItem.module.css';

export default class PortfolioItem extends React.Component {
  render() {
    return (
      <Card className={styles.portfolioCard}>
        <CardMedia
          className={styles.media}
          title={this.props.item.name}
        >
          <img className={styles.mediaImg} alt={this.props.item.name} src={this.props.item.img} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {this.props.item.name}
          </Typography>
          <Typography variant="body2" component="p">
            {this.props.item.abstract}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
