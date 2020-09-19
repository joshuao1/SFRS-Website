import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MediaCard from '../components/cards/MediaCard';
import Grid from '@material-ui/core/Grid'

// Import CSS Styles
import {titleStyle, cardStyle} from '../styles/Global'

// Import Images
import TRIVIA from '../assets/images/sfrs trivia night.png'
import REFLEGAL from '../assets/images/refugee_legal_banner.jpg'
import IGM from '../assets/images/IGM.jpg'

const useStyles = makeStyles({
    root: {
        margin: '20pts',
    },
    text: {
        margin: '20pts,',
        paddingLeft: '200pts'
    } 
})

  


function Blog(props) {
    const classes = useStyles(props)
    return (
        <div>
            <MediaCard title={ContentText.headline.title} text={ContentText.headline.text} cardStyle={titleStyle.card}/>
            <Card style={titleStyle.card}>
                <br/>
                <Typography variant='h4' align='center' gutterBottom>
                    Events
                </Typography>
                <Grid container spacing='1'>
                    {ContentText.events.map(event => (
                        <Grid item key={event.title} xs='6' md='3'>
                            <MediaCard title={event.title} text={event.text} cardStyle={cardStyle.card} mediaStyle={cardStyle.media} image={event.image} titleAlign={cardStyle.title}/>
                        </Grid>
                ))}
                </Grid>
            </Card>
        </div>
        
    );
};

const ContentText = {
    headline: {
      title: 'Previous Events And Write-Ups',
      text: "Blog",      
    },
    events: [
        {
          title: "A Conversation With Refugee Legal",
          text: "Coming Soon!",
          image: REFLEGAL,
        },
        {
          title: "Trivia Night!",
          text: "Our Inaugural Event was a Hit!",
          image: TRIVIA,
        },
        {
            title: "Inaugural General Meeting",
            text: "We got affiliated!",
            image: IGM,
          },
    ]  
};


export default Blog;