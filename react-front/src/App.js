import './App.css';
import Navbar from './components/Navbar';
import Connexion from "./routes/Connexion"
import Accueil from './routes/Accueil'
import Panier from './routes/Panier'
import Shop from './routes/Shop';
import Inscription from './routes/Inscription';
import Mdpforget from './routes/Mdpforget';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/Connexion" element={<Connexion/>} />
          <Route path="/Accueil" element={<Accueil/>} />
          <Route path="/Panier" element={<Panier/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/Mdpforget" element={<Mdpforget/>} />
        </Routes>
        
    </div>
  );
}

export default App;
