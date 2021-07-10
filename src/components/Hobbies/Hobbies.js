
import React from 'react';

import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import lesPaulFrontImg from '../../images/lpf.JPG';
import lesPaulBackImg from '../../images/lpb.JPG';
import bassFrontImg from '../../images/bf.JPG';
import bassSideImg from '../../images/bs.JPG';

import patienceAudio from '../../audio/patience.mp3';
import theOceanAudio from '../../audio/the_ocean.mp3';
import welcomeJungleAudio from '../../audio/welcome_to_the_jungle.mp3';
import mobyDickAudio from '../../audio/moby_dick.mp3';
import overHillAudio from '../../audio/over_the_hills.mp3';

import mainStyles from '../../index.module.css';
import styles from './Hobbies.module.css';

export default class Hobbies extends React.Component {
  render() {
    const imgData = [
      { cols: 1, img: lesPaulFrontImg, alt: 'lesPaulFrontImg'},
      { cols: 1, img: lesPaulBackImg, alt: 'lesPaulBackImg'},
      { cols: 1, img: bassSideImg, alt: 'bassSide'},
      { cols: 1, img: bassFrontImg, alt: 'bassFront'},
    ];

    const audioData = [
      { name: 'Guns n Roses - Patience', audio: patienceAudio },
      { name: 'Led Zeppelin - The Ocean', audio: theOceanAudio },
      { name: 'Guns n Roses - Welcome to the Jungle', audio: welcomeJungleAudio },
      { name: 'Led Zeppelin - Moby Dick', audio: mobyDickAudio },
      { name: 'Led Zeppelin - Over the Hills and Far Away', audio: overHillAudio }
    ];

    return (
      <Container className={mainStyles.container} maxWidth="md">
        <Typography className={mainStyles.title} variant="h4">
          Music
        </Typography>
        <Typography className={mainStyles.subtitle} variant="h5">
          Guitar Builds
        </Typography>
        <Typography className={mainStyles.text} variant="body1">
          Building and painting guitars has become a new hobby of mine. Starting from a raw wood body and
          neck, I would first treat, patch and sand the wood until smooth (excluding the fret board). Once
          satisfied, the painting begins in the following order: sanding sealer, primer, color coats, clear coat.
          This procress consumed the longest time period, spanning over two weeks of daily coats and
          the occasional wet sanding. As the final coat dries, I would start prepping the parts to be mounted
          into the body and headstock. The neck is then either bolted or glued into the body. Electronics are soldered together and tested before being mounted into the body.
          The final step is to string the instrument and make the necassiarly adjustments such as neck clearance,
          action height and fixing the intonation.
        </Typography>
        <Container className={styles.imgList} maxWidth="lg">
          <Grid container alignItems="stretch" spacing={1}>
            {imgData.map((item) => (
              <Grid key={item.alt} item xs={12} sm={item.cols > 1 ? 12 : 6} md={3}>
                <Card>
                  <CardMedia image={item.img} style={{height: 400, paddingBottom: '40.25%'}}/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Typography className={mainStyles.subtitle} variant="h5">
          Recordings
        </Typography>
        <Typography className={mainStyles.text} variant="body1">
          I like to record and play music. I started self-teaching guitar and drums from a young age,
          and recently started to record myself within Abelton Live.
          You can find the audio tracks (covers) of some of my recent recordings below.
        </Typography>
        <Typography className={mainStyles.text} variant="body1">
          Note: These are rough mixes and demo tracks, so they are weakly mastered.
        </Typography>
        <Container disableGutters>
          {audioData.map((item) => (
            <div>
              <Typography className={styles.trackTitle} variant="subtitle">
                {item.name} 
              </Typography>
              <audio className={styles.audioTrack} controls src={item.audio}>
                {item.name}
              </audio>
            </div>
          ))}
        </Container>
        <Typography className={mainStyles.text} variant="body1">
        </Typography>

        <Typography className={mainStyles.title} style={{paddingTop: "20px"}} variant="h4">
          Skateboarding
        </Typography>
        <Typography className={mainStyles.text} variant="body1">
          I started stakeboarding when I was young but stopped some years after. I had picked
          it up again while I was in Zurich and have been skating almost daily since.
        </Typography>
      </Container>
    );
  }
}
