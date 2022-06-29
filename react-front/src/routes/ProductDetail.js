import { useLocation, Link } from "react-router-dom";

function ProductDetail () {

    let location = useLocation();
    const product = location.state.product;


    return (
        <div className="d-flex justify-content-center align-items-center row">
        <Link to="/Shop" className="btn btn-primary m-1 w-25">Retour</Link>
        <div className=" d-flex p-4 justify-content-center align-items-center">
            <div className="card d-flex align-items-center" style={{width: '20rem'}}>
                <img src={product.image} style={{maxWidth: '90%'}}/>
                <div className="m-2 flex-end">
                    <h4 className="m-1">{product.album}</h4>
                    <p className="m-1">{product.artiste}</p>
                    <h2 className="m-1">{product.price}€</h2>
                </div>
            </div>
        </div>
        <Link to={`${product.id}`} className="btn btn-primary disabled m-1 w-25">Ajouter au panier</Link>
        </div>
        
    )
}
export default ProductDetail;