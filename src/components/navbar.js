import {Nav,NavDropdown,Navbar,Button ,Jumbotron } from "react-bootstrap";

function Menu(){
    return (
        <div className="head">
         <div className="container">
         <Navbar collapseOnSelect expand="lg"  >
  <Navbar >
    <Navbar.Brand href="#home">
      <img
        src="/logoairbnb.png"
        width="100"
        height="auto"
        className="d-inline-block align-top"
        alt="airbnb"
      />
    </Navbar.Brand>
  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#deets">Hébergements</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      
Expériences
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      
      Expériences en ligne
            </Nav.Link>

    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="#deets">Devenez hôte</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <i class="fas fa-globe"></i>
      

      </Nav.Link>

    <Nav.Link>
        <button  className="btnuser ">
        <i class="fas fa-bars  "></i>
        <i class="fas fa-user-circle ml-3  "></i>
        </button>

        
    </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="search">
        <div className="d-flex justify-content-between text-center">
            <div>
                <h8>Adresse</h8>
                <p>Ou allez-vous?</p>
            </div>
            <div>
                <h8>Date</h8>
                <p>Ajoutez les dates de votre voyage</p>
            </div>

            <div>
            <i class="fas fa-search"></i>
            </div>

        </div>
        </div>
<div className="desc">
  <h1>En pleine <br></br> nature</h1>
  <p>
  Favoris sélectionnés par Airbnb.

  </p>
  <p>
    <button>Trouver l'inspiration</button>
  </p>
</div>


         </div>       


        </div>
    )

}
export default Menu




