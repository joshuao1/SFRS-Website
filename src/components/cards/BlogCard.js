import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardActionArea, Divider} from '@material-ui/core'

import {blogStyle, cardStyle} from '../../styles/Global'



function BlogCard(props) {
  return (
    <CardActionArea>
        <Card style={cardStyle.card}> 
        
            <CardMedia
            component='img'
            image={props.image}
            title={props.title}
            style={blogStyle.cardMedia}
            />
            <CardContent style={cardStyle.content}>
                <Typography gutterBottom variant="subtitle2" align="center" style={{backgroundColor:'white'}}>
                    {props.date}
                </Typography>

                <Divider variant="middle" />
                <br/>
                <Typography gutterBottom variant="h5" align="center" style={{backgroundColor:'white'}}>
                    {props.title}
                </Typography>
                <Divider variant="middle" />
                <br/>
                <Typography gutterBottom component="p" align="center" style={{backgroundColor:'white'}}>
                    {props.text}
                </Typography>
                <br/>
            </CardContent>
        </Card>
    </CardActionArea>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default BlogCard;