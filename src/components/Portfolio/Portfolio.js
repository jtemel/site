
import React from 'react';

import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';

import mainStyles from '../../index.module.css';
import styles from './Portfolio.module.css';

import PortfolioItem from './PortfolioItem/PortfolioItem.js';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projects = [
      {
        link: 'thirtythreecollection.ca',
        img: '/images/33collection.png',
        name: 'ThirtyThree Collection',
        technology: [
          'React',
          'NodeJS',
          'MongoDB',
          'ExpressJS',
          'StripeJS',
          'CanadaPost API'
        ],
        abstract: 'E-commerce store for the ThirtyThree Collection candle business.'
      },
      {
        link: '',
        img: '/images/llvm.png',
        name: 'LLVM Testing and Build API',
        technology: [
          'Python',
          'BASH',
        ],
        abstract: 'API for locally configuring, building and testing the LLVM project.'
      },
      {
        link: '',
        img: '/images/coursemanagement.png',
        name: 'Course Management',
        technology: [
          'Java',
          'FXML',
          'SQLite',
          'CSS'
        ],
        abstract: 'Organizational tool for university courses, providing feedback and statistics.'
      },
      {
        link: 'jonathontemelkovski.ca',
        img: '/images/uoft.jpg',
        name: 'Personal Website',
        technology: 'React',
        abstract: "You're on it"
      },
      {
        link: 'https://github.com/jtemel/TODOscript',
        img: '/images/todo.png',
        name: 'TODO Script',
        technology: 'BASH, C++',
        abstract: 'Generate a directory with all the TODOs, READMEs and FIXMEs of a project.'
      },
      {
        link: 'https://github.com/jtemel/unix',
        img: '/images/todo.png',
        name: 'git ls',
        technology: [
          'Python',
          'BASH'
        ],
        abstract: 'Display the git status of a directory or file when using ls (supports ls -la)'
      },
      {
        link: 'https://github.com/jtemel/jobserver',
        img: '/images/jobserver.png',
        name: 'Job Server',
        technology: [
          'C'
        ],
        abstract: 'Host a TCP server for multi-client support to invoke jobs (forwarding output respectively) on the server remotely'
      }
    ];
    return (
      <Container className={mainStyles.container} maxWidth="md">
        <Typography className={mainStyles.title} variant="h4">
          Portfolio
        </Typography>
        <Grid container spacing={4}>
          {
            projects.map((e, i) => (
              <Grid item xs={12} sm={6} id={i}>
                <PortfolioItem item={e} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    )
  }
}
