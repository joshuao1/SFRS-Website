import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardActionArea, Divider} from '@material-ui/core'

import {useStyles} from '../../styles/Global'



function BlogCard(props) {
  const classes=useStyles();
  return (
    <CardActionArea>
        <Card className={classes.blogCard}> 
        
            <CardMedia
            component='img'
            image={props.image}
            title={props.title}
            className={classes.blogMedia}
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle2" align="center" className={classes.blogText}>
                    {props.date}
                </Typography>
              
                <Typography gutterBottom variant="h5" align="center" className={classes.blogText}>
                    {props.title}
                </Typography>
                <Divider variant="middle" />
                <br/>
                <Typography gutterBottom component="p" align="center" className={classes.blogText}>
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