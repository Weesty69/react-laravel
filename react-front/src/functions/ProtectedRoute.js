import { useEffect, useState } from "react";
import { AuthAdmin } from "./Auth";
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children}) => {

    const [isAuth, setAuth] = useState()
    
    useEffect(() => {
        AuthAdmin().then(res => setAuth(res.data.status));
    }, [])

    if (isAuth === false) {
        return <Navigate to="/" replace />;
    } else if (isAuth === true){
        return children;
    }

}

export default ProtectedRoute;