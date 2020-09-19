import { Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import UMSU from '../assets/images/UMSUnobg.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const styles = {
    links: {
        marginLeft: 'auto',
        marginRight: '0',
      },
    normal: {
        margin: '20px',
        textDecoration: 'none'
    }
}

function Footer() {
    return (
        <div>
            <br/>
            <Toolbar>
            
            <div style={styles.normal}>
                <img src={UMSU} alt='UMSU Logo' height='60px' margin='20px'/>
            </div>
            <div style={styles.normal}>
                <Typography>
                    Students for Refugees Society,
                    Mailbox 175, Level 1, Union House
                    The University of Melbourne, Vic, 3010
                </Typography>
            </div>
            <div style={styles.normal}>
                <a href='mailto:unimelb.sfr@gmail.com' style={styles.normal}>
                    <Typography color='primary'>
                        unimelb.sfr@gmail.com
                    </Typography>
                </a>
            </div>
            <div style={styles.normal}>
                <IconButton size='medium' href='https://www.facebook.com/unimelbsfr'>
                    <FacebookIcon color='primary'/>
                </IconButton>
            </div>
            <div style={styles.normal}>
                <IconButton size='medium' color='primary' href='https://www.instagram.com/sfr_unimelb/'>
                    <InstagramIcon/>
                </IconButton>
            </div>
        </Toolbar>
        <br/>

        </div>
    )
}

export default Footer;