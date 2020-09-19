import React from 'react';
import LOGO from "../images/sfrs logo cropped.jpg"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IMG from '../images/sfrs trivia night.png'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import MediaCard from '../components/MediaCard';


function Home() {
  return (
    <div>
      <br>
      </br>
      <MediaCard title='test' text='aosdifnaodsinf' image={LOGO} height='500'/>
      <Card> 

        <CardMedia
          component='img'
          image= {LOGO}
          title="Club Logo"
          height='500'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Helping Local Refugee Communities
          </Typography>
          <Typography component="p">
            The Students for Refugees society is a way for students to get involved in raising awareness about the experiences of refugees and asylum seekers. The club aims to educate members about the related legal, cultural, and political issues, as well as actively work towards improving the conditions surrounding refugees and asylum seekers. This society is an opportunity to connect with larger organisations and facilitate volunteering at the University of Melbourne, with the vision of creating a community that is understanding and supportive of the plight faced by refugees.
          </Typography>
        </CardContent>
      </Card>
      <br/>
      <Grid container spacing='1'>
        <Grid item xs='6' md='3'>
          <Card>
            <Typography>
              <MediaCard/>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs='6' md='3'>
          <Card>
            <Typography>
              Box 2
            </Typography>
          </Card>
        </Grid>
        <Grid item xs='6' md='3'>
          <Card>
            <Typography>
              Box 3
            </Typography>
          </Card>
        </Grid>
        <Grid item xs='6' md='3'>
          <Card>
            <Typography>
              Box 4
            </Typography>
          </Card>
        </Grid>

      </Grid>
    </div>
    )
  }

export default Home;