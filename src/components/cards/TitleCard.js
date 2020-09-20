import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Divider} from '@material-ui/core'

// Import CSS
import {useStyles} from '../../styles/styles'

function TitleCard(props) {
  const classes=useStyles();
  return (
    <Card className={classes.titleCard}> 
      <CardMedia
        component='img'
        image={props.image}
        title={props.title}
        className={classes.titleMedia}
      />
      <CardContent className={classes.titleContent}>
        <Typography gutterBottom variant="h4" align="left">
          {props.title}
        </Typography>
        <Divider variant="middle" />
        <br/>
        <Typography gutterBottom component="p" align="left">
          {props.text}
        </Typography>
        <br/>
      </CardContent>
    </Card>
  );
}

TitleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default TitleCard;