import './App.css';
import Navbar from './components/Navbar';
import Connexion from "./routes/Connexion"
import Accueil from './routes/Accueil'
import Panier from './routes/Panier'
import Shop from './routes/Shop';
import Inscription from './routes/Inscription';
import Mdpforget from './routes/Mdpforget';
import { Route, Routes } from "react-router-dom"
import ProductDetail from './routes/ProductDetail';
import ProtectedRoute from './functions/ProtectedRoute';
import ProtectedAuth from './functions/ProtectedAuth';

function App() {


  return (
    
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/connexion" element={<ProtectedAuth><Connexion/></ProtectedAuth>} />
          <Route path="/inscription" element={<ProtectedAuth><Inscription/></ProtectedAuth>} />
          <Route path="/" element={<Accueil/>} />
          <Route path="/panier" element={<Panier/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:product" element={<ProductDetail/>} />
          <Route path="/motdepasseoublie" element={<Mdpforget/>} />
        </Routes>
        
    </div>
  );
}

export default App;
