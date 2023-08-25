import Cards from "./Cards"
import { Link,useLocation } from "react-router-dom";

function Route1() {
    const location = useLocation();
    const searchParams=new URLSearchParams(location.search);
    const productId=searchParams.get('productId');
var cardList=[
    { productId:1,
      title:'Outlook for 2021: breakthrough for EVs with 15% market share',

   img:'https://news.mgmotor.eu/wp-content/uploads/2021/03/MG-ZS-EV-black-exterior-800x450.jpg',
  
    },
    {
      productId:2,
      title:'10 reasons to choose an electric car over a fuel car',

   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/200716_MG-ZS-EV-800x450.jpg',
  
    },
    {
      productId:3,
      title:'MG ZS EV voted ‘Family Car of the Year 2021’ by Flemish Automobile Association',
  
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-ZS-EV_2021-VAB-Family-Car-of-the-Year-800x450.jpg',
  
    },
    { productId:4,
     
      title:'MG expands in Europe: where are we for sale and where soon?',

   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-dealer-Van-Mossel-800x450.jpg',
  
    },
    {
      productId:5,
      title:'MG opens next chapter with first delivery in Germany',
  
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/First-MG-ZS-EV-GERMANY-2021-800x450.jpg',
  
    },
    {
      productId:6,
      title:'How to optimize your EV range in winter conditions?',

   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-ZS-EV-winter-drive-4-800x450.jpg',
  
    },
    {
      productId:7,
      title:'MG’s pioneering plug-in hybrid powertrain: how does it work?',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/2021-MG-EHS-Plug-in-Hybrid-exterior-1-1-800x450.jpg',
  
    },
    {
      productId:8,
      title:'Peace of mind: MG offers one of the best warranty conditions',
  
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-ZS-EV-800x450.jpg',
  
    },
    {
      productId:9,
      title:'Meet our parent company: SAIC Motor',
 
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/MG-Motor_2-800x450.jpg',
  
    },
    {
      productId:10,
      title:'Europe is electrifying: record EV sales in 2020',
  
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/MG-EHS-Plug-in-Hybrid-charging-800x450.jpg',
  
    },
    {
      productId:11,
      title:'MG’s great attention to detail',
  
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/MG_EHS_PRESS_29-800x450.jpg',
  
    },
    { productId:12,
      title:'2020 sales: MG impresses in Europe',
  
   img:'https://news.mgmotor.eu/wp-content/uploads/2020/10/MG-ZS-EV-Germany-1-800x450.jpg',
  
    }
    
  ]

    return(
   <>
  
   {productId}
   <h1>{cardList[productId-1].title}</h1>
   <img src={cardList[productId-1].img}/>
    </>
  );
}

export default Route1;





