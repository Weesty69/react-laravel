
import logo from '../assets/images/logo.png'

function Navbar() {


    return(
        <div className="Navbar">
            
            <nav className="navbar navbar-expand-lg bg-light ;">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="#"><img className="logo" src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./Accueil">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./Shop">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="./Connexion">Se connecter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="./Inscription">Inscription</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="./Panier"><i className="fa-solid fa-cart-shopping"></i></a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
       
    )
}

export default Navbar;