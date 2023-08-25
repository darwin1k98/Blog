
import Cards from './Cards';


var productList=[
    {
      productId:1,
      date:'02-03-2021',
      title:'Outlook for 2021: breakthrough for EVs with 15% market share',
   text:'With well over 1 million registrations in Europe, EVs reached a new sales record in 2020. For the first time[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/03/MG-ZS-EV-black-exterior-800x450.jpg',
  
    },
    {productId:2,
      date:'02-03-2021',
      title:'10 reasons to choose an electric car over a fuel car',
   text:' 1 – Zero emission The main reason electric cars are being developed is that they don’t produce any emissions whilst [...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/200716_MG-ZS-EV-800x450.jpg',
  
    },
    {productId:3,
      date:'02-03-2021',
      title:'MG ZS EV voted ‘Family Car of the Year 2021’ by Flemish Automobile Association',
   text:' For the first time in VAB’s Family Car of the Year election (34th year), only 100% electric cars competed in[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-ZS-EV_2021-VAB-Family-Car-of-the-Year-800x450.jpg',
  
    },
    {productId:4,
      date:'02-03-2021',
      title:'MG expands in Europe: where are we for sale and where soon?',
   text:' MG Motor Europe started its journey in mainland Europe in The Netherlands, where MG’s European headquarter is based. Here, we[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-dealer-Van-Mossel-800x450.jpg',
  
    },
    {productId:5,
      date:'02-03-2021',
      title:'MG opens next chapter with first delivery in Germany',
   text:'For MG, Germany is clearly an exciting market. MG demonstrates its commitment to electric mobility in Europe. Pledging to make[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/First-MG-ZS-EV-GERMANY-2021-800x450.jpg',
  
    },
    {productId:6,
      date:'02-03-2021',
      title:'How to optimize your EV range in winter conditions?',
   text:'The actual range of an electric car depends on many factors. Such as the driving style of the driver, the[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-ZS-EV-winter-drive-4-800x450.jpg',
  
    },
    {productId:7,
      date:'02-03-2021',
      title:'MG’s pioneering plug-in hybrid powertrain: how does it work?',
   text:'A plug-in hybrid is powered by a combustion engine and an electric motor, just like a regular hybrid car. The[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/2021-MG-EHS-Plug-in-Hybrid-exterior-1-1-800x450.jpg',
  
    },
    {productId:8,
      date:'02-03-2021',
      title:'Peace of mind: MG offers one of the best warranty conditions',
   text:'It is not easy to conquer the European market as a renewed car brand with a British heritage that is[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/02/MG-ZS-EV-800x450.jpg',
  
    },
    {productId:9,
      date:'02-03-2021',
      title:'Meet our parent company: SAIC Motor',
   text:'SAIC Motor (Shanghai Automotive Industry Corporation) was founded in 1958 and is the seventh largest automotive manufacturer in the world[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/MG-Motor_2-800x450.jpg',
  
    },
    {productId:10,
      date:'02-03-2021',
      title:'Europe is electrifying: record EV sales in 2020',
   text:' An interesting development is underway in Europe. For the first time since 2015, Europe is ahead of China with the[...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/MG-EHS-Plug-in-Hybrid-charging-800x450.jpg',
  
    },
    {productId:11,
      date:'02-03-2021',
      title:'MG’s great attention to detail',
   text:'With its advanced plug-in hybrid powertrain, spacious and luxurious interior and high quality standards, MG is disrupting the EV market [...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2021/01/MG_EHS_PRESS_29-800x450.jpg',
  
    },
    {productId:12,
      date:'02-03-2021',
      title:'2020 sales: MG impresses in Europe',
   text:'In Norway, the MG ZS EV is the number 8 best-selling car overall and the 7th best-selling electric car with [...]',
   img:'https://news.mgmotor.eu/wp-content/uploads/2020/10/MG-ZS-EV-Germany-1-800x450.jpg',
  
    }
    
  ]
  function CardDetail() {
    return (
      <>

        <div>
          <div className="row">
            {productList.map((productDetail, index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <Cards  productDetail={productDetail} />
                </div>
              );
            })}
          </div>
          </div>

</>
);
}

export default CardDetail;  