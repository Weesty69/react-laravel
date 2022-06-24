import './App.css';
import Navbar from './components/Navbar';
import "./Navbar.css"
import Connexion from "./components/Connexion"
import Acceuil from './components/Acceuil'
import Panier from './components/Panier'
import Shop from './components/Shop';
import Inscription from './components/Inscription';
import Mdpforget from './components/Mdpforget';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/Connexion" element={<Connexion/>} />
          <Route path="/Acceuil" element={<Acceuil/>} />
          <Route path="/Panier" element={<Panier/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/Mdpforget" element={<Mdpforget/>} />
        </Routes>
        
    </div>
  );
}

export default App;
