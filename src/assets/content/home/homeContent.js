// Import graphics
import EDUC from "../../images/graduated.svg"
import GRASS from "../../images/grass.svg"
import CONNECT from "../../images/network.svg"
import GROUP from "../../images/group.svg"
import LOGO from "../../images/sfrs logo cropped.jpg"

export const content = {
    headline : {
      title: 'For A More Inclusive Future',
      text: "The University of Melbourne Students for Refugees Society is a student group striving to improve the experiences of refugees and asylum seekers.",
    },
    banner: LOGO,
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