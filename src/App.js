import Topbar from './components/topbar.js';
import Menu from './components/navbar.js';
import './App.css';
import Cities from './components/cardTravel.js';
import Cities1 from './components/cardTravel1.js';
import Cities2 from './components/cardTravel2.js';
import Description from "./components/description.js";
import Footer from "./components/footer.js"
import React from 'react-bootstrap'


function App() {
  return (
    <div>
      <Topbar />
      <Menu />
      <div className="container">
      <Cities1 /> 
      <Cities />
      <Description />
      <Cities2 />
     

      </div>
      <Footer />


    </div>
  );
}

export default App;
