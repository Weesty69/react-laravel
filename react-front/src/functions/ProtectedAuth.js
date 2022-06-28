import { useEffect, useState } from "react";
import { Auth } from "./Auth";
import { Navigate } from 'react-router-dom';


const ProtectedAuth = ({children}) => {

    const [isAuth, setAuth] = useState()
    
    useEffect(() => {
        Auth().then(res => setAuth(res.data.status));
    }, [])

    if (isAuth === true) {
        return <Navigate to="/" replace />;
    } else if (isAuth === false){
        return children;
    }

}

export default ProtectedAuth;