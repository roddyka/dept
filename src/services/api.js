import axios from 'axios';
import chocomel from "../img/chocomel.png";
import jbl from "../img/jbl.png";
import koninklijke from "../img/koninklijke-bibliotheek.png";
import zalando from "../img/zalando.png";

const api = {
  content: {
    menu : [
      {
        name : "HOME"
      },  
      {
        name : "WERK"
      },  
      {
        name : "OVER"
      },  
      {
        name : "DIENSTEN"
      },  
      {
        name : "PARTNERS"
      },  
      {
        name : "STORIES"
      },  
      {
        name : "VACATURES"
      },  
      {
        name : "EVENTS"
      },  
      {
        name : "CONTACT"
      }
    ],
    body: [
      {
        title: "Chocomel",
        img: chocomel,
        subtitle: "A campaign for the limited edition letter packs",
        button: "VIEW CASE"
      },
      {
        title: "JBL",
        img: jbl,
        subtitle: "Live like a champion with Jerome Booteng",
        button: "VIEW CASE"
      },
      {
        title: "Koninklijke Bibliotheek",
        img: koninklijke,
        subtitle: "The search for the most influential book ever",
        button: "BUY NOW!",
        new: "NEW",
        class: "animateNEW"
      },
      {
        title: "zalando",
        img: zalando,
        subtitle: "Innovative SEO and content strategy for Zalando",
        button: "VIEW CASE"
      }
      
    ],
    solotext: [
      {
        text : '"Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month."',
        autor: "MATTIJS TEN BRINK – CEO, TRANSAVIA"
      }
    ]
  }
};
export default api;