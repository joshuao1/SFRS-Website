import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Divider} from '@material-ui/core'



function MediaCard(props) {
  return (
    <Card
      style={props.cardStyle}
    > 
      <CardMedia
        component='img'
        image = {props.image}
        title={props.title}
        style={props.mediaStyle}
      />
      <CardContent
        style={props.contentStyle}
      >
        <Typography gutterBottom variant="h4" align="center">
          {props.title}
        </Typography>
        <Divider variant="middle" />
        <br/>
        <Typography gutterBottom component="p" align="center">
          {props.text}
        </Typography>
        <br/>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MediaCard;