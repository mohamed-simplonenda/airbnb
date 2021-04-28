
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function City (props){
    return(
        props.ville2.map(el=>
            <div>
            <Row>
<Card style={{ width: '23rem', border:'none' }}>
<Card.Img variant="top" src={el.image} height="350px" style={{borderRadius:'5px'}}/>
<Card.Body>
<Card.Title className="card-title">{el.name}<p className="card-text">{el.desc}</p></Card.Title>




</Card.Body>
</Card>
</Row>
        </div>
            )

      )
  }
  export default City
