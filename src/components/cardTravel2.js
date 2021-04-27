
import City from './City 2'


const Citys =[
    {name:"Collection a la une",image:'./img1.jpg', },
    {name:"Expériences en ligne",image:'./img2.jpg',},
    {name:"Expériences",image:'./img3.jpg',},
   

  
  ]


function Cities2() {
    return (
   <div>
     <h1>Découvrez les expériences</h1>
     <p>Des activités uniques avec des experts locaux, en personne ou en ligne.</p>
<div className="d-flex justify-content-between flex-wrap">
<City ville2  = {Citys} />
</div>
</div>  
  
    );
  }
export default Cities2;
  