import './index.css';
import Navbar from './components/Navbar';
import Connexion from "./routes/Connexion";
import Accueil from './routes/Accueil';
import Panier from './routes/Panier';
import Shop from './routes/Shop';
import Inscription from './routes/Inscription';
import Mdpforget from './routes/Mdpforget';
import { Link, Route, Routes } from "react-router-dom";
import ProductDetail from './routes/ProductDetail';
import ProtectedRoute from './functions/ProtectedRoute';
import ProtectedAuth from './functions/ProtectedAuth';
import EditProduct from './routes/panel/EditProduct';
import AddProduct from './routes/panel/AddProduct';
import Admin from './routes/panel/admin';

function App() {


  return (
    
    <div className="App">
      <Navbar/>
        <Routes>

          <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>} />
          <Route path="/admin/edit/:id" element={<ProtectedRoute><EditProduct/></ProtectedRoute>} />
          <Route path="/admin/add" element={<ProtectedRoute><AddProduct/></ProtectedRoute>} />

          <Route path="/connexion" element={<ProtectedAuth><Connexion/></ProtectedAuth>} />
          <Route path="/inscription" element={<ProtectedAuth><Inscription/></ProtectedAuth>} />
          <Route path="/" element={<Accueil/>} />
          <Route path="/panier" element={<Panier/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:product" element={<ProductDetail/>} />
          <Route path="/motdepasseoublie" element={<Mdpforget/>} />
          <Route path="*" element={<h2 className='text-center m-4'>Page non trouvée <Link to="/">Retour à l'accueil</Link></h2>} />
        </Routes>
        
    </div>
  );
}

export default App;
