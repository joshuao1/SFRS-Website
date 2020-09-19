import React from 'react';
import MediaCard from '../components/MediaCard';
// Import CSS Styles
import {titleStyle, cardStyle} from '../styles/Global'
import OWEEK from '../assets/images/sfrs oweek 2019.png'

const AboutContent = {
  main : {
    title: "About Us",
    content: "The Students for Refugees Society is the first and only club at The Universty of Melbourne striving to improve refugee outcomes. Founded in 2019 we are officially affiliated with the University of Melbourne Student Union."
  }
}

function About() {
    return (
      <MediaCard title={AboutContent.main.title} text={AboutContent.main.content} image={OWEEK} contentStyle={titleStyle.content} mediaStyle={titleStyle.media} cardStyle={titleStyle.card}/>
    )
  }

export default About;