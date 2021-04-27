
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function City (props){
    return(
        props.villes.map(el=>
            <div>
            <Row>
<Card style={{ width: '17rem' }}>
<Card.Img variant="top" src={el.image} />
<Card.Body className="d-flex justify-content-between">
<div><Card.Title>{el.name}</Card.Title></div>



</Card.Body>
</Card>
</Row>
        </div>
            )

      )
  }
  export default City
