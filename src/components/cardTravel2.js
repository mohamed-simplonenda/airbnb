
import City from './City 2'


const Citys =[
    {name:"Collection à la une : Envies d'évasion",image:'./img1.jpg',desc:'Voyagez depuis chez vous grâce aux expériences en ligne.' },
    {name:"Expériences en ligne",image:'./img2.jpg',desc:'Activités interactives en direct, animées par des hôtes.'},
    {name:"Expériences",image:'./img3.jpg',desc:'Prenez part à des activités locales, où que vous soyez.'},
   

  
  ]


function Cities2() {
    return (
   <div>
     <h2><b>Découvrez les expériences</b></h2>
     <h3>Des activités uniques avec des experts locaux, en personne ou en ligne.</h3><br/>
<div className="d-flex justify-content-between flex-wrap">
<City ville2  = {Citys} />
</div>
</div>  
  
    );
  }
export default Cities2;
  