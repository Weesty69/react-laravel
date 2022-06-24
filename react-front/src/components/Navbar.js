
function Navbar() {
    return(
        <div className="Navbar">
            
            <nav class="navbar navbar-expand-lg bg-light ;">
                <div class="container-fluid">
                    <a class="navbar-brand logo" href="#"><img class="logo" src="../images/logo.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./Acceuil">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./Shop">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="./Connexion">Se connecter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="./Inscription">Inscription</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="./Panier">Panier</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
       
    )
}

export default Navbar;