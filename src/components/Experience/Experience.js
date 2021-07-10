
import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import nthirty from '../../images/33logo.jpg';
import verity from '../../images/verity.jpg';
import uoft from '../../images/uoft.jpg';

import mainStyles from '../../index.module.css';
import styles from './Experience.module.css';

export default class Experience extends React.Component {
  render() {
    const nthirtyAction = (
      <Grid container justify="center" alignItems="center" className={styles.time}>
        <Grid item  xs={6}>
          <Typography className={mainStyles.cardText} variant="body2">April 1 2020</Typography>
        </Grid>
        <Grid item  xs={6}>
          <Typography className={mainStyles.cardText} variant="body2">Present</Typography>
        </Grid>
      </Grid>
    );

    const verityAction = (
      <Grid container justify="center" alignItems="center" className={styles.time}>
        <Grid item  xs={6}>
          <Typography className={mainStyles.cardText} variant="body2">June 1 2019</Typography>
        </Grid>
        <Grid item  xs={6}>
          <Typography className={mainStyles.cardText} variant="body2">May 30 2020</Typography>
        </Grid>
      </Grid>
    );

    const uoftAction = (
      <Grid container justify="center" alignItems="center" className={styles.time}>
        <Grid item xs={6}>
          <Typography className={mainStyles.cardText} variant="body2">Sept 6 2020</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={mainStyles.cardText} variant="body2"> May 1 2021</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <Typography className={mainStyles.cardText} variant="body2">Sept 6 2018</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={mainStyles.cardText} variant="body2">May 1 2019</Typography>
        </Grid>
      </Grid>
    );

    const experienceData = [
      {
        img: nthirty,
        name: "CTO",
        company: "Thirty-Three Collection",
        loc: "Richmond Hill, Ontario",
        action: nthirtyAction,
        info: [
          "Implemented the backend services for the Thirty-Three Collection e-commerce site",
          "Designed and implemented the UI for the front end web service",
          "Continous support for customers and partners within IT relation",
          "Built an admin access point for fellow partners to access and modify databases (such as item stock, discounts and order history)"
        ],
      }, {
        img: verity,
        name: "Junior Engineer",
        company: "Verity AG",
        loc: "Zuirch, Switzerland",
        action: verityAction,
        info: [
          "Added functionality to low-level C++ libraries for threading and inter-process communciation",
          "Added a streaming library using gstreamer",
          "Configured the embedded Linux ecosystem with ptxdist",
          "Researched, implemented and tested a core affinity library in C++ for pinning and isolating process on the drone",
          "Debugging, refactoring and testing various parts of the software suite",
          "On-site support for customer installation of pilot system"
        ],
      }, {
        img: uoft,
        name: "Teaching Assistant",
        company: "University of Toronto",
        loc: "Toronto, Canada",
        action: uoftAction,
        info: [
          ""
        ]
      }
    ];

    return (
      <Container className={mainStyles.container} maxWidth="md">
        <Typography className={mainStyles.title} variant="h4">
          Experience
        </Typography>
        {experienceData.map((item) => (
          <Card className={styles.job} id={item.name}>
            <CardHeader
              avatar={
                <Avatar
                  className={styles.orgAvatar}
                  style={
                    { border: 0, objectFit: 'cover' }
                  }
                  variant="square"
                  alt="verity"
                  src={item.img}
                />
              }
              title={item.name}
              titleTypographyProps={{variant: "h6"}}
              subheader={item.company}
              subheaderTypographyProps={{variant: "subtitle"}}
            />
            <CardContent className={styles.cardCont}>
              {item.action}
              <List className={styles.list} disablePadding>
                {item.info.map((i) => (
                  <ListItem className={styles.listItem} key={i} disableGutters dense>
                    <ListItemText primary={`${i}.`} />
                  </ListItem>
                ))}
              </List>
              <Typography className={styles.loc} variant="body2">
                {item.loc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    );
  }
}
