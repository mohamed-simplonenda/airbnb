
import City from './City1'


const Citys =[
    {name:"Tunis",image:'/tunis.jpg',desc:"Temps de trajet :15 min" },
    {name:"Marsa",image:'/marsa.jpg',desc:"Temps de trajet :30 min"},
    {name:"Kelibia",image:'/klibia.jpg',desc:"2 heures de route"},
    {name:"Yasmine Hammamet",image:'/hammamet.jpg',desc:"1 heures de route" },
    {name:"Hammamet sud",image:'/hammamet sud.jpg',desc:"Temps de trajet :45 min"},
    {name:"Hergla",image:'/hergla.jpg',desc:"1.5 heures de route"},
    {name:"Korba",image:'/korba.jpg',desc:"1.5 heures de route"},
    {name:"Aghir",image:'/aghir.jpg',desc:"8 heures de route"}
  
  ]


function Cities1() {
    return (
      <div>
      <h2  className="mt-5 mb-3"><b>Explorez les environs</b></h2>
<div className="d-flex justify-content-between flex-wrap">
<City ville  = {Citys} />
</div>
</div>
  
    );
  }
export default Cities1;
  