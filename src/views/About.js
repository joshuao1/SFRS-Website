import React from 'react';
import MediaCard from '../components/cards/MediaCard';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

//Import CSS Styles
import {titleStyle, cardStyle} from '../styles/Global'

//Import custom components
import AvatarCard from '../components/cards/AvatarCard';
import TitleCard from '../components/cards/TitleCard';

//Import content
import {content} from '../assets/content/about/aboutContent'


function About() {
    return (
      <div>
        <TitleCard title={content.main.title} text={content.main.content} image={content.banner}/>
        <Card style={titleStyle.card}>
        <br/>
        <Typography variant='h5' align='center' gutterBottom style={{fontSize:'225%'}}>
          The Team
        </Typography>
        <Grid container spacing='1'>
          {content.team.map(team => (
            <Grid item key={team.name} xs='6' md='3'>
              <AvatarCard name={team.name} title={team.title} image={team.image} />            
            </Grid>
          ))}
        </Grid>
      </Card>
      </div>
      
    )
  }

export default About;