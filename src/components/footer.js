import {Row,Col,Container} from 'react-bootstrap';
function Footer() {
    return(
        <div className="footer">
         <Container>
  <Row>
    <Col>
    <p>À PROPOS</p>
    
    <li><a href="#">Fonctionnement d'Airbnb</a></li>
    <li><a href="#">Newsroom</a></li>
    <li><a href="#">Investisseurs</a></li>
    <li><a href="#">Airbnb Plus</a></li>
    <li><a href="#">Airbnb Luxe</a></li>
    <li><a href="#">HotelTonight</a></li>
    <li><a href="#">Airbnb for Work</a></li>
    <li><a href="#">C'est possible, grâce aux hôtes</a></li>
    <li><a href="#">Carrières</a></li>
    <li><a href="#">Lettre des fondateurs</a></li>
    
    </Col>
    <Col>
    <p>COMMUNAUTÉ</p>
    <li><a href="#">Diversité et intégration</a></li>
    <li><a href="#">Accessibilité</a></li>
    <li><a href="#">Partenaires Airbnb</a></li>
    <li><a href="#">Logements d'urgence</a></li>
    <li><a href="#">Parrainage de voyageurs</a></li>
    <li><a href="#">Airbnb.org</a></li>
    </Col>
    <Col>
    <p>HÔTE</p>
    <li><a href="#">Héberger des voyageurs</a></li>
    <li><a href="#">Organiser une expérience en ligne</a></li>
    <li><a href="#">Organiser une expérience</a></li>
    <li><a href="#">Accueil responsable</a></li>
    <li><a href="#">Centre de ressources</a></li>
    <li><a href="#">Community Center</a></li>

    </Col>
    <Col>
    <p>ASSISTANCE</p>
    <li><a href="#">Nos mesures face au COVID-19</a></li>
    <li><a href="#">Centre d'aide</a></li>
    <li><a href="#">Options d'annulation</a></li>
    <li><a href="#">Service d'aide aux voisins</a></li>
    <li><a href="#">Confiance et sécurité</a></li>

    </Col>
  </Row>
  <hr className="mt-5 mb-3" color="#dadada " />
  <div className="d-flex justify-content-between">
  <a>© 2021 Airbnb, Inc.</a>
  <Row>
  <i class="fas fa-globe "><u className="ml-2">Français (FR)</u></i>
  <i class="fas fa-euro-sign ml-4 "><u className="ml-2">EUR</u></i>
  <i class="fab fa-facebook-f ml-5"></i>
  <i class="fab fa-twitter ml-4"></i>
  <i class="fab fa-instagram ml-4"></i>

  </Row>

  </div>
  
  <Row className="conf">
      
  <a href="#">Confidentialité</a>
  <p className="mx-2"> . </p>
  <a href="#">Conditions générales</a>
  <p className="mx-3"> . </p>
  <a href="#">Plan du site</a>
  <p className="mx-3"> . </p>
  <a href="#">Fonctionnement du site</a>
  <p className="mx-3"> . </p>
  <a href="#">Infos sur l'entreprise</a>
  

  </Row>
</Container>


        </div>
    )
    
}
export default Footer