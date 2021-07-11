
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
  Link,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import mainStyles from '../../index.module.css';
import styles from './Research.module.css';

import benchmarkPdf from '../../pdf/benchmark.pdf';

export default class Research extends React.Component {
  render() {
    const llvmTime = (
      <Grid container justify="center" alignItems="center" className={styles.time}>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">May 2021</Typography>
        </Grid>
        <Grid item  xs={2}>
          <Typography className={mainStyles.cardText} variant="body2">-</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">Present</Typography>
        </Grid>
      </Grid>
    );

    const miningTime = (
      <Grid container justify="center" alignItems="center" className={styles.time}>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">September 2018</Typography>
        </Grid>
        <Grid item  xs={2}>
          <Typography className={mainStyles.cardText} variant="body2">-</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={mainStyles.cardText} variant="body2">May 2019</Typography>
        </Grid>
      </Grid>
    );

    const experienceData = [
      {
        name: "LLVM Compiler Regression",
        supervisor: "Andi LastName",
        time: llvmTime,
        info: [
        ],
      }, {
        name: "Mining Online Learning Activities: Benchmarking CS1 Exercises",
        supervisor: "Andrew Petersen",
        time: miningTime,
        info: [
          {
            title: "Context",
            info: "Over the course of third year of study (May 2018 - April 2019), I worked under the supervision of Professor Andrew Petersen to eliminate student struggles in introductory computer science courses (CS1). At the University of Toronto, many professors use video lessons, reading guides, MCQ's and small coding exercises to aid in teaching CS1 courses, through an online portal known as PCRS." 
          }, {
            title: "Patterns",
            info: "Traditional pedagogies have been shown to be ineffective for teaching CS1 courses. With the unique and advantageous resources available to computer science students at the University of Toronto, in addition to traditional ones such as office hours, failure and drop rates continue to be a tremendous problem. Moreover, it is evident that computer science students are not learning as much as instructors expect with the inability to use abstraction to tackle complex problems." 
          }, {
            title: "Benchmarking Conceptual CS1 Exercises",
            info: "Integrating data from both PCRS problem attempts and past exams, we will be applying rigorous data mining and careful analysis to explore how students engage with introductory computer science material. Using this data, we desire to develop benchmarking exercises for introductory computer science courses. Our established benchmark will be used to answer our research question: \"To what extent can questions benchmark conceptual CS1 knowledge?\"" 
          }, {
            title: "Abstract",
            info: "Developing and validating benchmarking questions traditionally requires the difficult task of seeding question into examinations. We present a simpler method of developing potential benchmarking questions. Distributing an assessment of 12 questions, we analyzed and validated student responses across major themes in both CS1 and CS2 to determine the qualities a benchmarking question should have to be effective." 
          }
        ],
        pdf: benchmarkPdf
      }
    ];

    return (
      <Container className={mainStyles.container} maxWidth="md">
        <Typography className={mainStyles.title} variant="h4">
          Research
        </Typography>
        {experienceData.map((item) => (
          <Card className={styles.job} id={item.name}>
            <CardHeader
              title={item.name}
              titleTypographyProps={{variant: "h5"}}
              subheader={`Supervisor: ${item.supervisor}`}
              subheaderTypographyProps={{variant: "subtitle"}}
            />
            <CardContent className={styles.cardCont}>
              <Typography className={styles.time} variant="body2">
                {item.time}
              </Typography>
              <List className={styles.list} disablePadding>
                {item.info.map((i) => (
                  <ListItem className={styles.listItem} key={i} disableGutters dense>
                    <ListItemText
                      primary={i.title}
                      primaryTypographyProps={{variant: "h6"}}
                      secondary={i.info}
                      secondaryTypographyProps={{variant: "body1", color: "black" }}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography style={{textAlign: 'center'}} variant="body1">
                {
                  item.pdf &&
                  <Link href={item.pdf} target="blank">View Paper</Link>
                  
                }
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    );
  }
}
