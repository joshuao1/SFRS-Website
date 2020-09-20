// Import Images
import TRIVIA from '../../images/sfrs trivia night.png'
import REFLEGAL from '../../images/refugee_legal_banner.jpg'
import IGM from '../../images/IGM.jpg'
import TRIVIASHOT from '../../images/trivia night attendance.png'

export const content = {
    headline: {
      title: 'Our Blog',
      text: 'Previous Events And Write-Ups',      
    },
    banner: TRIVIASHOT,
    events: [
        {
          title: "A Conversation With Refugee Legal",
          text: "Coming Soon!",
          date: "1/10/20",
          image: REFLEGAL,
        },
        {
          title: "Trivia Night!",
          text: "Our Inaugural Event",
          date: "26/8/20",
          image: TRIVIA,
        },
        {
            title: "Inaugural General Meeting",
            text: "We got affiliated!",
            date: "14/10/20",
            image: IGM,
          },
    ]  
};
