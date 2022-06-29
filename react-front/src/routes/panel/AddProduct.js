import axios from "axios";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getCookie } from "../../functions/Cookie";



const AddProduct = () => {

    const [album, setAlbum] = useState();
    const [price, setPrice] = useState();
    const [artiste, setArtiste] = useState();
    const [image, setImage] = useState();
    const [message, setMessage] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        let token = getCookie('token');
        axios.post('http://127.0.0.1:8000/api/add', {
            token: token,
            album: album,
            price: price,
            artiste: artiste,
            image: image
        }).then((res) => setMessage(res.data))
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form className="w-50 p-5" onSubmit={(e) => submitForm(e)}>
                <Link to='/admin'>Retour</Link>
                {message ? <div className={message.success == true ? 'alert alert-success' : 'alert alert-danger'}>{message.message} <Link to='/admin'>Retour</Link></div>: null}
                <div className="form-group mb-2">
                    <label htmlFor="inputEmail">Album</label>
                    <input type="text" className="form-control" name="album" onChange={(e) => setAlbum(e.target.value)} value={album} placeholder="album"></input>
                </div>  
                <div className="form-group mb-2">
                    <label htmlFor="inputEmail">Prix</label>
                    <input type="text" className="form-control" name="price" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="prix"></input>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="inputPassword">Artiste</label>
                    <input type="text" className="form-control" name="artiste" onChange={(e) => setArtiste(e.target.value)} value={artiste} placeholder="nom de l'artiste"></input>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="inputPassword">Image</label>
                    <input type="text" className="form-control" name="image" onChange={(e) => setImage(e.target.value)} value={image} placeholder="lien de l'image"></input>
                </div>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default AddProduct;