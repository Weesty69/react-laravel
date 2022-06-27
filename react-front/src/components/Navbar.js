
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {


    return(
        <div className="Navbar">
            
            <nav className="navbar navbar-expand-lg bg-light ;">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="/"><img className="logo" src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/connexion">Se connecter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/inscription">Inscription</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/panier"><i className="fa-solid fa-cart-shopping"></i></Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
       
    )
}

export default Navbar;