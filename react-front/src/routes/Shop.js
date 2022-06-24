import { useEffect, useState } from "react";
import axios from 'axios';

function Shop () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
        .then(res => setProducts(res.data[0]))
    })

    return (
        <div className="d-flex p-4 justify-content-center">
            {products.map((item, key) => (
            <div key={key} className="card d-flex justify-content-center w-25 m-2 text-center">
                <img src={item.image} alt="" />
                <h3>{item.album}</h3>
                <h3>{item.artiste}</h3>
                <h3>{item.price}</h3>
            </div>
        ))}
        </div>
        
    )
}
export default Shop;