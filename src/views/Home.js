import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles';

// Import components
import IconCard from '../components/cards/IconCard';
import TitleCard from '../components/cards/TitleCard';

// Import CSS Styles
import {useStyles} from '../styles/styles'

// Import content
import {content} from '../assets/content/home/homeContent'

function Home(props) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div>
      <TitleCard title={content.headline.title} text={content.headline.text} image={content.banner}/>
      <Card className={classes.card} style={{backgroundColor: theme.palette.secondary.main}}>
        <br/>
        <Typography variant='h5' align='center' gutterBottom style={{fontSize:'205%', color: theme.palette.secondary.contrastText}}>
          Our Goals
        </Typography>
        <Grid container spacing='1'>
          {content.aims.map(aim => (
            <Grid item key={aim.title} xs='6' md='3'>
              <IconCard title={aim.title} text={aim.text} image={aim.image}/>
            </Grid>
          ))}
        </Grid>
      </Card>
      
    </div>
    )
  }

export default Home;