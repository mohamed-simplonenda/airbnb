
import City from './City'


const Citys =[
    {name:"Escapades en pleine nature",image:'./2f13349d-879d-43c6-83e3-8e5679291d53.jpg', },
    {name:"Des llogements uniques",image:'./7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg',},
    {name:"Logements entiers",image:'./10a638e1-6aff-4313-8033-1275cec83987.jpg',},
    {name:"Animaux de compagnie acceptés",image:'./36f53e61-db8d-403c-9122-5b761c0e4264.jpg',}

  
  ]


function Cities() {
    return (
   <div>
     <h1>Chez vous, partout</h1>
<div className="d-flex justify-content-between flex-wrap">
<City villes  = {Citys} />
</div>
</div>  
  
    );
  }
export default Cities;
  