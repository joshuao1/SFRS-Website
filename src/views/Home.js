import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

// Import components
import MediaCard from '../components/MediaCard';

// Import graphics
import EDUC from "../assets/images/graduated.svg"
import GRASS from "../assets/images/grass.svg"
import CONNECT from "../assets/images/network.svg"
import GROUP from "../assets/images/group.svg"
import LOGO from "../assets/images/sfrs logo cropped.jpg"

const styles = {
  media: {
     //paddingTop: '56.25%', // 16:9
     paddingLeft: '250px',
     position: 'relative',
     marginBottom: '50px',
     //objectFit: "cover",
     height: "500px",
     width: "100%"
  },
  card: {
     position: 'relative',
     margin: "10px"
  },
  content: {
     position: 'absolute',
     top: '150px',
     left: '10px',
     color: 'black',
     backgroundColor: '',
     width: '515px',
     marginBottom: '50px',
    },
  aimMedia: {
    height: "100px",
    marginTop: "20px",
    maxWidth: "100%",
    objectFit: "contain"
  },
  aimCard: {
    margin: "10px",
    height: "350px",
  },
  aimTitle: {
    align: 'center',
  }


}

const ContentText = {
  headline : {
    title: 'Building A More Inclusive Future',
    text: "The Students for Refugees society is a way for students to get involved in raising awareness about the experiences of refugees and asylum seekers. The club aims to educate members about the related legal, cultural, and political issues, as well as actively work towards improving the conditions surrounding refugees and asylum seekers. This society is an opportunity to connect with larger organisations and facilitate volunteering at the University of Melbourne, with the vision of creating a community that is understanding and supportive of the plight faced by refugees.",
  },
  aims : [
    {
      title: "Educate",
      text: "To educate members about the situations and experiences of refugees and asylum seekers in Australia, providing an insight into legal, social, cultural and political issues",
      image: EDUC,
    },
    {
      title: "Improve",
      text: "To improve the conditions of refugees and asylum seekers in Australia, notably through grassroots movements and community involvement",
      image: GRASS,
    },
    {
      title: "Connect",
      text: "To connect members with larger organisations specialising in refugee issues, facilitating volunteering opportunities in Melbourne",
      image: CONNECT,
    },
    {
      title: "Community",
      text: "To create a community where members feel safe to share experiences and open up discussions with like-minded peers",
      image: GROUP,
    },
  ]
}

function Home() {
  return (
    <div>
      <MediaCard title={ContentText.headline.title} text={ContentText.headline.text} image={LOGO} height='550' contentStyle={styles.content} cardStyle={styles.card} mediaStyle={styles.media}/>
      <Card style={styles.card}>
        <br/>
        <Typography variant='h4' align='center' gutterBottom>
          Our Goals
        </Typography>
        <Grid container spacing='1'>
          {ContentText.aims.map(aim => (
            <Grid item key={aim.title} xs='6' md='3'>
              <MediaCard title={aim.title} text={aim.text} cardStyle={styles.aimCard} mediaStyle={styles.aimMedia} image={aim.image} titleAlign={styles.aimTitle}/>
            </Grid>
          ))}
        </Grid>
      </Card>
      
    </div>
    )
  }

export default Home;