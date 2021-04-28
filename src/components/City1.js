


function City (props){
    return(
        props.ville.map(el=>
            <div className="d-flex flex-wrap travel">
                <img className="travel-img my-2" src={el.image}/>
                <div className="my-3 ml-3">
                <b>{el.name}</b>  <br></br>
                {el.desc}

                </div>
            
        </div>
            )

      )
  }
  export default City
