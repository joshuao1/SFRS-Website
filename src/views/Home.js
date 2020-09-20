import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

// Import components
import MediaCard from '../components/cards/MediaCard';
import TitleCard from '../components/cards/TitleCard';

// Import CSS Styles
import {titleStyle} from '../styles/Global'

// Import content
import {content} from '../assets/content/home/homeContent'



function Home() {
  return (
    <div>
      <TitleCard title={content.headline.title} text={content.headline.text} image={content.banner}/>
      <Card style={titleStyle.card}>
        <br/>
        <Typography variant='h5' align='center' gutterBottom style={{fontSize:'225%'}}>
          Our Goals
        </Typography>
        <Grid container spacing='1'>
          {content.aims.map(aim => (
            <Grid item key={aim.title} xs='6' md='3'>
              <MediaCard title={aim.title} text={aim.text} image={aim.image}/>
            </Grid>
          ))}
        </Grid>
      </Card>
      
    </div>
    )
  }

export default Home;