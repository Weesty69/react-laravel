import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Shop () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
        .then(res => setProducts(res.data[0]))
    })

    return (
        <div className="d-flex justify-content-center align-items-center row">
            {products.map((item, key) => (
            <div key={key} className="card d-flex justify-content-center w-25 m-2 text-left col-lg-2">
                <div style={{backgroundImage: `url(${item.image})`, width: '100%', height: '300px', backgroundSize: 'cover'}}></div>
                <h4 className="m-1">{item.album}</h4>
                <p className="m-1">{item.artiste}</p>
                <h2 className="m-1">{item.price}€</h2>
                <div>
                    <Link to={`${item.id}`} state={{product: item}} className="btn btn-primary m-1">Détail</Link>
                    <Link to={`${item.id}`} className="btn btn-primary disabled m-1">Ajouter au panier</Link>
                </div>
            </div>
            ))}
        </div>
        
    )
}
export default Shop;