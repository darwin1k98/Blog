import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
  
    <CardGroup className="p-4">
        
      <Link to={`/route1?productId=${props.productDetail.productId}`}><Card.Img variant="top" src={props.productDetail.img}/></Link>
       
        <Card.Body >
         <small className="text-muted">{props.productDetail.date} </small>    
        
          <Card.Title>{props.productDetail.title}</Card.Title>
          <Card.Text>
          {props.productDetail.text}
          </Card.Text>
        </Card.Body>
  
    </CardGroup>
   
  );
}

export default Cards;