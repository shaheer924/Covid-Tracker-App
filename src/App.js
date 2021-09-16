import React, { useState } from 'react';
import NavbarSearch from './Components/Navbar';
//import Linechart from './Components/Graph';
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/FootNav';
import './App.css';

function App() {
  const ScreenShow = useState(0);
  return (
    <div className="maint">
      <NavbarSearch/>
      <InfoPanel currentScreen = {ScreenShow[0]}/>
      <FootNav ScreenShow = {ScreenShow}/>
    </div>
  );
}

export default App;
