import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Divider} from '@material-ui/core'

import {useStyles} from '../../styles/styles'


function IconCard(props) {
  const classes=useStyles();
  return (
    <Card className={classes.iconCard}> 
      <CardMedia
        component='img'
        image={props.image}
        title={props.title}
        className={classes.iconMedia}
      />
      <CardContent className={classes.iconCard}>
        <Typography gutterBottom variant="h5" align="center" className={classes.iconTitle}>
          {props.title}
        </Typography>
        <Divider variant="middle" />
        <br/>
        <Typography gutterBottom component="p" align="center" className={classes.iconText}>
          {props.text}
        </Typography>
        <br/>
      </CardContent>
    </Card>
  );
}

IconCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default IconCard;