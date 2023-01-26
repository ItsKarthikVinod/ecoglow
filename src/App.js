import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/Banner';
import Add from './components/Add';
import Features from './components/Features';
import Login from './components/Login'
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(true)
  
  return (
    <div className="App">
      <NavBar  />
      <Banner />
      <Add />
      {/* <Features />  */}
    </div>
  );
}

export default App;
