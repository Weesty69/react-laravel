import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../functions/Cookie";


function Admin () {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
        .then(res => setProducts(res.data[0]))
    },[])

    const deleteProduct = (id) => {
        let token = getCookie('token');
        axios.post('http://127.0.0.1:8000/api/delete', {
            token: token,
            id: id
        }).then((res) => {
            if (res.data.success == true) {
                setProducts(products.filter(product => product.id !== id))
            }
        })
    }

    return (
        
        <div className="d-flex justify-content-center align-items-center text-center row">
            <Link to='/admin/add' className="btn btn-primary m-1">Ajouter</Link>
            {products.length > 0 ?
            products.map((product, key) => (
                <div key={key} className="card d-flex justify-content-center w-25 m-2 text-left col-lg-2">
                    <div style={{backgroundImage: `url(${product.image})`, width: '100%', height: '300px', backgroundSize: 'cover'}}></div>
                    <h4 className="m-1">{product.album}</h4>
                    <p className="m-1">{product.artiste}</p>
                    <h2 className="m-1">{product.price}€</h2>
                    <div>
                        <Link to={`/admin/edit/${product.id}`} state={{product}} className="btn btn-primary m-1">Modifier</Link>
                        <button onClick={() => deleteProduct(product.id)} className="btn btn-primary m-1">Supprimer</button>
                    </div>
                </div>
            ))
            :
             <h2 className="m-4">Aucun produits. Ajoutez-en !</h2>}  
        </div>
        
    )
}
export default Admin;