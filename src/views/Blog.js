import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid'

// Import components
import MediaCard from '../components/cards/MediaCard';
import TitleCard from '../components/cards/TitleCard';

// Import CSS Styles
import {titleStyle, cardStyle} from '../styles/Global'

import {content} from '../assets/content/blog/blogContent'


function Blog(props) {
    return (
        <div>
            <TitleCard title={content.headline.title} text={content.headline.text} image={content.banner}/>
            <Card style={titleStyle.card}>
                <br/>
                <Typography variant='h5' align='center' gutterBottom style={{fontSize:'225%'}}>
                    Events
                </Typography>
                <Grid container spacing='1'>
                    {content.events.map(event => (
                        <Grid item key={event.title} xs='6' md='3'>
                            <MediaCard title={event.title} text={event.text} image={event.image}/>
                        </Grid>
                ))}
                </Grid>
            </Card>
        </div>
        
    );
};


export default Blog;