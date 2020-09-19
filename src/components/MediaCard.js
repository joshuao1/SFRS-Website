import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import LOGO from "../images/sfrs logo cropped.jpg"


function MediaCard(props) {
  return (
    <Card
      style={props.cardStyle}
    > 
      <CardMedia
        component='img'
        image = {props.image}
        title={props.title}
        height={props.height}
        style={props.mediaStyle}
      />
      <CardContent
        style={props.contentStyle}
      >
        <Typography gutterBottom variant="h4" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MediaCard;