import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Avatar, Divider} from '@material-ui/core'

// Import CSS
import {avatarStyle} from '../../styles/Global' 

function AvatarCard(props) {
    return (
        <div>
            <Card style={avatarStyle.card}>
                <CardMedia>
                    <Avatar alt={props.name} src={props.image} style={avatarStyle.avatar}/>

                </CardMedia>
                <CardContent style={avatarStyle.card}>
                    <Typography gutterBottom variant="h5" align="center">
                        {props.name}
                    </Typography>
                    <Divider variant="middle" />
                    <br/>
                    <Typography gutterBottom component="p" align="center">
                        {props.title}
                    </Typography>
                    <br/>
                </CardContent>
            </Card>
        </div>

    );
}

export default AvatarCard