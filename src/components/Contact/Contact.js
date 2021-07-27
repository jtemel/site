import React from 'react';
import { Redirect } from 'react-router-dom';
import emailjs from 'emailjs-com';

import {
  Button,
  Container,
  FormGroup,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@material-ui/core';

import TelegramIcon from '@material-ui/icons/Telegram';

import mainStyles from '../../index.module.css';
import styles from './Contact.module.css';

emailjs.init("user_Yzs0YE9ExHY4VH4OKJfzd");

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      error: false,
      msg: '',

      email: '',
      subject: '',
      body: '',

      done: false
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

    const successMsg = 'Thank you for the inquiry. I will respond as soon as I can.';
    const errorMsg = 'Inquiry failed to send. Please contact me directly at jonathon.temelkovski@gmail.com.';

    const params = { 
      email: this.state.email,
      subject: this.state.subject,
      body: this.state.body
    };

    emailjs.send('service_4mqny8b', 'template_8pnlswo', params)
      .then((response) => {
        this.setState({
          open: true,
          error: false,
          msg: successMsg,
          email: '',
          subject: '',
          body: '',
          done: false
        });
      }, (error) => {
        this.setState({
          open: true,
          error: true,
          msg: errorMsg,
          email: '',
          subject: '',
          body: '',
          done: false
        });
      });

  }

  handleClose() {
    const isErrored = this.state.error;

    this.setState({
      open: false,
      error: false,
      msg: '',
      done: !isErrored,
    });
  }


  render() {
    const getModalStyle = () => {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };
    }

    if (this.state.done) {
      return <Redirect to="/" />;
    }

    console.log(this.state);
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
                      label="Your Email"
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
                      onClick={this.sendEmail}
                    >
                      <TelegramIcon style={{paddingRight: '5px'}} /> Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </FormGroup>
          </Grid>
        </Grid>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={getModalStyle()} className={styles.modalStyle}>
            <Typography variant="h5">{this.state.error ? "Oops..." : "Inquiry Sent!"}</Typography>
            <Typography variant="body1">{this.state.msg}</Typography>
          </div>
        </Modal>
      </Container>
    );
  }
}
