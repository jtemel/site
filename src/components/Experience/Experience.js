
import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
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
      <Grid container justifyContent="center" alignItems="center" className={styles.time}>
        <Grid item  xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">April 1 2020</Typography>
        </Grid>
        <Grid item  xs={2}>
          <Typography className={mainStyles.cardText} variant="body2">-</Typography>
        </Grid>
        <Grid item  xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">Present</Typography>
        </Grid>
      </Grid>
    );

    const verityAction = (
      <Grid container justifyContent="center" alignItems="center" className={styles.time}>
        <Grid item  xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">June 1 2019</Typography>
        </Grid>
        <Grid item  xs={2}>
          <Typography className={mainStyles.cardText} variant="body2">-</Typography>
        </Grid>
        <Grid item  xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">May 30 2020</Typography>
        </Grid>
      </Grid>
    );

    const uoftAction = (
      <Grid container justifyContent="center" alignItems="center" className={styles.time}>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">Sept 6 2020</Typography>
        </Grid>
        <Grid item  xs={2}>
          <Typography className={mainStyles.cardText} variant="body2">-</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2"> May 1 2021</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">Sept 6 2018</Typography>
        </Grid>
        <Grid item  xs={2}>
          <Typography className={mainStyles.cardText} variant="body2">-</Typography>
        </Grid>
        <Grid item xs={5}>
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
          "Wrote scripts for automating process such as flashing nightly builds onto various drones",
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
          "Courses: Data Structures and Analysis, Linear Algebra, Systems Programming (2 sections), Computational Theory and Analysis (2 sections), Introduction to Programming",
          "Worked directly with the Lead Course Instructor and other teaching assistants to deliver content tailored for students both in-person and remotely",
          "Created, graded and presented content to the students in a variety of disciplines including linera algebra, computer science, statistics and system programming",
          "Held open office hours weekly to assistant students in a one-to-one manner",
          "Invigilated examinations, adminstered quizzes and tests and graded assignments",
        ]
      }
    ];

    return (
      <Container className={mainStyles.container} maxWidth="md">
        <Typography className={mainStyles.title} variant="h4">
          Experience
        </Typography>
        {experienceData.map((item) => (
          <Card className={styles.job} id={item.name} key={item.name}>
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
              subheaderTypographyProps={{variant: "subtitle1"}}
            />
            <CardContent className={styles.cardCont}>
              {item.action}
              <List className={styles.list} disablePadding>
                {item.info.map((i) => (
                  <ListItem className={styles.listItem} key={i} disableGutters dense>
                    <ListItemText
                      primary={`${i}.`}
                      primaryTypographyProps={{variant: "body1"}}
                    />
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
