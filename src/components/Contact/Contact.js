import React from 'react';

import {
  Button,
  Container,
  Divider,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

import TelegramIcon from '@material-ui/icons/Telegram';

import mainStyles from '../../index.module.css';
import styles from './Contact.module.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      subject: '',
      body: ''
    };
  }

  render() {
    return (
      <Container className={mainStyles.container} maxWidth="md">
        <Typography className={mainStyles.title} variant="h4">
          Contact
        </Typography>
        <Typography className={mainStyles.text} variant="body1">
          Feel free to contact me using the form below. I will respond as soon as I can.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormGroup>
              <form noValidate autoComplete="off">
                <Grid container direction="column" spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="subject"
                      label="Subject"
                      fullWidth
                      variant="outlined"
                      value={this.state.subject}
                      onChange={(e) => this.setState({ subject: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      rows={10}
                      name="body"
                      label="Body"
                      fullWidth
                      multiline
                      variant="outlined"
                      value={this.state.body}
                      onChange={(e) => this.setState({ body: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className={styles.sendButton}
                      type="submit"
                      fullWidth
                    >
                      <TelegramIcon style={{paddingRight: '5px'}} /> Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
