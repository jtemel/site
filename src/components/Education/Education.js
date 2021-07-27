
import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import uoft from '../../images/uoft.jpg';

import mainStyles from '../../index.module.css';
import styles from './Education.module.css';

export default class Education extends React.Component {
  render() {
    const uoftAction = (
      <Grid container justifyContent="center" alignItems="center" className={styles.time}>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">Sept 2016</Typography>
        </Grid>
        <Grid item  xs={2}>
          <Typography className={mainStyles.cardText} variant="body2">-</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2"> Aug 2021</Typography>
        </Grid>
      </Grid>
    );

    const experienceData = [
      {
        img: uoft,
        name: "Honors Bachelor of Science: Specialist Computer Science and Major Mathematics",
        company: "University of Toronto",
        loc: "Toronto, Ontario",
        action: uoftAction,
        awards: [
          "UofT Honor Roll for 90%+ in more than two Computer Science or Mathematics courses",
          "'Golden Deer' Learning Excellence Award on my Data Structures and Analysis course",
        ],
        csCourse: [
          "Software Design",
          "Theory of Computation",
          "Communication Skills for Computer Scientists",
          "Software Tools and Systems Programming",
          "Computer Architecture",
          "Data Structures and Analysis",
          "Principles of Programmings Languages",
          "Databases",
          "Operating Systems",
          "Algorithm Design and Analysis",
          "Numerical Methods",
          "Computer Networks",
          "Computational Complexity and Computability",
          "Introduction to A.I.",
          "Parallel Programming",
        ],
        mathCourse: [
          "Calculus I",
          "Linear Algebra I",
          "Linear Algebra II",
          "Probability and Statistics",
          "Discrete Mathematics",
          "Calculus II",
          "Ordinary Differential Equations",
          "Groups and Symmetries",
          "Complex Calculus",
          "Real Analysis",
          "Number Theory",
          "Partial Deifferential Equations",
          "Combinatorics",
          "Classical Geometries"
        ]
      }
    ];

    return (
      <Container className={mainStyles.container} maxWidth="md">
        <Typography className={mainStyles.title} variant="h4">
          Education
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
              subheaderTypographyProps={{variant: "subtitle1"}}
            />
            <CardContent className={styles.cardCont}>
              {item.action}
              <Typography variant="h5">
                Awards
              </Typography>
              <List className={styles.list} disablePadding>
                {item.awards.map((i) => (
                  <ListItem className={styles.listItem} key={i} disableGutters dense>
                    <ListItemText
                      primary={`${i}.`}
                      primaryTypographyProps={{variant: "body1"}}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography style={{paddingTop: 15, paddingBottom: 10}} variant="h5">
                Relevant Course List
              </Typography>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Computer Science
                  </Typography>
                  <List className={styles.list} disablePadding>
                    {item.csCourse.map((i) => (
                      <ListItem className={styles.listItemSmall} key={i} disableGutters dense>
                        <ListItemText
                          primary={`${i}`}
                          primaryTypographyProps={{variant: "body1"}}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">
                    Mathematics
                  </Typography>
                  <List className={styles.list} disablePadding>
                    {item.mathCourse.map((i) => (
                      <ListItem className={styles.listItemSmall} key={i} disableGutters dense>
                        <ListItemText
                          primary={`${i}`}
                          primaryTypographyProps={{variant: "body1"}}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
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
