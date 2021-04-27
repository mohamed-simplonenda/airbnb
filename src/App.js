import Menu from './components/navbar.js';
import './App.css';
import Cities from './components/cardTravel.js';
import Cities1 from './components/cardTravel1.js';
import Cities2 from './components/cardTravel2.js';
import React from 'react-bootstrap'


function App() {
  return (
    <div>
      <Menu />
      <div className="container">
      <Cities /> 
      <Cities1 />
      <Cities2 />
      </div>


    </div>
  );
}

export default App;
