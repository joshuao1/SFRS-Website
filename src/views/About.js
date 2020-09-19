import React from 'react';
import MediaCard from '../components/cards/MediaCard';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

// Import CSS Styles
import {titleStyle, cardStyle} from '../styles/Global'
import OWEEK from '../assets/images/sfrs oweek 2019.png'
import AvatarCard from '../components/cards/AvatarCard';

//Import Images
import JONG from '../assets/images/JoshuaOng_Headshot.jpg'


const AboutContent = {
  main: {
    title: "About Us",
    content: "The Students for Refugees Society is the first and only club at The Universty of Melbourne striving to improve refugee outcomes. Founded in 2019 we are officially affiliated with the University of Melbourne Student Union."
  },
  team: [
    {
      name: 'Joshua Ong',
      title: 'President',
      image: JONG
    },
    {
      name: 'Jessica Lee',
      title: 'Vice President',
      image: JONG
    },
    {
      name: 'Tzur Ko Green Rochvarger',
      title: 'Secretary',
      image: JONG
    },
    {
      name: 'Alizee Schucht',
      title: 'Treasurer',
      image: JONG
    },
    {
      name: 'Victoria Schucht',
      title: 'Committee',
      image: JONG
    },
    {
      name: 'Lachlan Andrews',
      title: 'Committee',
      image: JONG
    },
    {
      name: 'Renee Goh',
      title: 'Committee',
      image: JONG
    },

  ]
}

function About() {
    return (
      <div>
        <MediaCard title={AboutContent.main.title} text={AboutContent.main.content} image={OWEEK} contentStyle={titleStyle.content} mediaStyle={titleStyle.media} cardStyle={titleStyle.card}/>
        <Card style={titleStyle.card}>
        <br/>
        <Typography variant='h4' align='center' gutterBottom>
          The Team
        </Typography>
        <Grid container spacing='1'>
          {AboutContent.team.map(team => (
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