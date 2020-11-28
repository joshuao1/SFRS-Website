import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles';

//Import CSS Styles
import {useStyles} from '../stylesheets/styles'

//Import custom components
import AvatarCard from '../components/cards/AvatarCard';
import TitleCard from '../components/cards/TitleCard';

//Import content
import {content} from '../assets/content/about/aboutContent'


function About() {
  const classes=useStyles();
  const theme = useTheme();
  return (
    <div>
      <TitleCard title={content.main.title} text={content.main.content} image={content.banner}/>
      <Card className={classes.card} style={{backgroundColor:theme.palette.secondary.main}}>
      <br/>
      <Typography variant='h5' align='center' gutterBottom style={{fontSize:'205%'}}>
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