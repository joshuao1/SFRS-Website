import { IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import UMSU from '../assets/images/UMSUnobg.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const styles = {
    umsu: {
        marginLeft: 'auto',
        marginRight: '30px',
      },
    normal: {
        margin: 'auto',
        textDecoration: 'none'
    },
    social: {
        margin: 'auto',
        height: '150px'
    }
}

function Footer() {
    const theme = useTheme();
    return (
        <div>
            <br/>
            <Toolbar>
            
            <div style={styles.umsu}>
                <img src={UMSU} alt='UMSU Logo' height='60px'/>
            </div>
            <div style={styles.normal}>
                <Typography>
                    Mailbox 175, Level 1, Union House
                    The University of Melbourne, VIC, 3010
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
                <IconButton href='https://www.facebook.com/unimelbsfr'>
                    <FacebookIcon color='primary'/>
                </IconButton>
            </div>
            <div style={styles.normal}>
                <IconButton color='primary' href='https://www.instagram.com/sfr_unimelb/'>
                    <InstagramIcon/>
                </IconButton>
            </div>
        </Toolbar>
        <br/>

        </div>
    )
}

export default Footer;