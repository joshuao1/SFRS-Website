import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Avatar, Divider} from '@material-ui/core'

// Import CSS
import {useStyles} from '../../stylesheets/styles' 

function AvatarCard(props) {
    const classes=useStyles();
    return (
        <div>
            <Card className={classes.avatarCard}>
                <CardMedia>
                    <Avatar alt={props.name} src={props.image} className={classes.avatarMedia}/>
                </CardMedia>
                <CardContent className={classes.avatarCard}>
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