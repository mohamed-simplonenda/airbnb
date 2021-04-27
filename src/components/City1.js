


function City (props){
    return(
        props.ville.map(el=>
            <div className="d-flex">
                <img width="75px" height="75px" src={el.image}/>
                <div>
                {el.name} <br></br>
                {el.desc}

                </div>
            
        </div>
            )

      )
  }
  export default City
