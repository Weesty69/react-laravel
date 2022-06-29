import logo from '../assets/images/logo.png'


function Accueil () {
    return (
        
      <main>
        <section id="accueil" className="d-flex justify-content-center w-100">
        <div className="w-50 d-flex justify-content-center align-items-center">
          <img src={logo} alt=""  width="50%"/>
        </div>
        <div id="right-content" className="w-50"></div>
      </section>
      <section id="accueil" className="d-flex justify-content-center w-100">
        <div className="p-5 w-50 d-block justify-content-center text-center">
          <h3>Qui sommes nous ?</h3>
          <p>Specialiste du disque vinyle depuis 1972 , nos magasins sont présents dans toute la
            France :
            Lyon (24 rue Marcel Sembat 69007)
            Paris ( 34 rue du pont 75009)
            Marseille (25 rue de la solidarité 13012)
            Nous proposons les albums et singles de vos artistes préférés aux meilleurs prix.
            Nous sommes maintenant présent en version digitale pour faciliter vos commandes
            avec des livraisons rapides et efficaces dans toute la France.
            </p>
        </div>
      </section>
      </main>
        )
    }
    export default Accueil;