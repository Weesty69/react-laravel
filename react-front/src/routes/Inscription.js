import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Inscrption () {

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatpassword, setRPassword] = useState('');
    const [error, setError] = useState('');

    let navigate = useNavigate();


    const submitForm = (e) => {
        e.preventDefault();
        if (password == repeatpassword && nom && email && password) {
            axios.post('http://127.0.0.1:8000/api/register', {
                name: nom,
                email: email,
                password: password
            }).then(res => {
                setError(res.data.error)
                if (error == false) {
                    navigate('/connexion')
                }
            })
        } else {
            setError('Mots de passe pas correspondants.')
        }
    }

    return (
   <div className="d-flex justify-content-center">
     <form className="w-25 p-5" onSubmit={(e) => submitForm(e)}>
     {error ? <div className="alert alert-danger">{error}</div>: null}
        <div className="form-group mb-2">
            <label htmlFor="inputEmail">Nom</label>
            <input type="text" className="form-control" name="name" onChange={(e) => setNom(e.target.value)} value={nom} placeholder="Nom"></input>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"></input>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="inputPassword">Mot de passe</label>
            <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Mot de passe"></input>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="inputPassword">Répeter le mot de passe</label>
            <input type="password" className="form-control" name="repeatpassword" onChange={(e) => setRPassword(e.target.value)} value={repeatpassword} placeholder="Répeter mot de passe"></input>
        </div>
        <input type="submit" className="btn btn-primary"/>
    </form>
   </div>
    )
}
export default Inscrption;