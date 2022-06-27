import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Cookie from '../functions/Cookie';

function Connexion () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let navigate = useNavigate();


    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password,
        }).then(res => {
            if (res.data.error) {
                setError(res.data)
            } else if (res.data.token) {
                setError('')
                Cookie.SetCookie('token', res.data.token, 30)
                navigate("/shop")
            }
        })
    }

    return (
   <div className="d-flex justify-content-center w-100">
    <form className="w-25 p-5" onSubmit={(e) => submitForm(e)}>
        {error.error ? <div className="alert alert-danger">{error.error}</div>: null}
        <div className="form-group mb-2">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"></input>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
   </div>
   
)
}
export default Connexion;