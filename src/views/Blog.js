import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid'

// Import components
import TitleCard from '../components/cards/TitleCard';
import BlogCard from '../components/cards/BlogCard';

// Import CSS Styles
import {useStyles} from '../styles/Global'

import {content} from '../assets/content/blog/blogContent'


function Blog(props) {
    const classes=useStyles();
    return (
        <div>
            <TitleCard title={content.headline.title} text={content.headline.text} image={content.banner}/>
            <Card className={classes.card}>
                <br/>
                <Typography variant='h5' align='center' gutterBottom style={{fontSize:'225%'}}>
                    Events
                </Typography>
                <Grid container spacing='1'>
                    {content.events.map(event => (
                        <Grid item key={event.title} xs='6' md='3'>
                            <BlogCard date={event.date} title={event.title} text={event.text} image={event.image}/>
                        </Grid>
                ))}
                </Grid>
            </Card>
        </div>
        
    );
};


export default Blog;