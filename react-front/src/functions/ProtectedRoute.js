import { useEffect, useState } from "react";
import { Auth } from "./Auth";
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children}) => {

    const [isAuth, setAuth] = useState()
    
    useEffect(() => {
        Auth().then(res => setAuth(res.status));
    }, [])

    if (isAuth === false) {
        return <Navigate to="/" replace />;
    } else if (isAuth === true){
        return children;
    }

}

export default ProtectedRoute;