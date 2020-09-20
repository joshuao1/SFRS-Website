import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Divider} from '@material-ui/core'

import {cardStyle} from '../../styles/Global'


function MediaCard(props) {
  return (
    <Card style={cardStyle.card}> 
      <CardMedia
        component='img'
        image={props.image}
        title={props.title}
        style={cardStyle.media}
      />
      <CardContent style={cardStyle.content}>
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
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MediaCard;