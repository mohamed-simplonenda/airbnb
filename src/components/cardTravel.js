
  import {Card} from 'react-bootstrap';
  import {Row} from 'react-bootstrap';


const Citys =[
    {name:"Escapades en pleine nature",image:'./2f13349d-879d-43c6-83e3-8e5679291d53.jpg', },
    {name:"Des logements uniques",image:'./7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg',},
    {name:"Logements entiers",image:'./10a638e1-6aff-4313-8033-1275cec83987.jpg',},
    {name:"Animaux de compagnie acceptés",image:'./36f53e61-db8d-403c-9122-5b761c0e4264.jpg',}

  
  ]


function City (props){
    return(
        props.villes.map(el=>
            <div>
             

            <Row>
<Card style={{ width: '17rem', border:'none' }} className="card-travel">
<Card.Img variant="top" src={el.image} style={{borderRadius:'5px'}}/>
<Card.Body className="d-flex justify-content-between">
<div><Card.Title className="card-title"> {el.name}</Card.Title></div>



</Card.Body>
</Card>
</Row>
        </div>
            )

      )
  }


function Cities() {
    return (
   <div>
     <h2  className="mt-5 mb-4"><b>Chez vous, partout</b></h2>
<div className="d-flex justify-content-between flex-wrap card-travel">
<City villes  = {Citys} />
</div>
</div>  
  
    );
  }
export default Cities;
  