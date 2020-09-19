import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Avatar, Divider} from '@material-ui/core'

const size = '150px'

const styles = {
    
    avatar: {
        height: size,
        width: size,
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        objectFit: 'none'
    },
    card: {
        height: "400px",
        margin: "10px",
    }
}

function AvatarCard(props) {
    return (
        <div>
            <Card style={styles.card}>
                <CardMedia>
                    <Avatar alt={props.name} src={props.image} style={styles.avatar}/>

                </CardMedia>
                <CardContent style={styles.card}>
                    <Typography gutterBottom variant="h4" align="center">
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