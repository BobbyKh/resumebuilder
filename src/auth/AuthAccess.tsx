
import { Navigate  } from "react-router-dom";
import { useAuthentication  } from "./Auth";



function ProtectedRoute({ children }: any) { 
    
    const {isAuthorized} = useAuthentication();

    if (!isAuthorized) {
        return <Navigate to="/login" />;
    }

    if (
        isAuthorized && 
        (window.location.pathname === "/login" || 
        window.location.pathname === "/register")
    ) {
        
        return <Navigate to="/" />;
    }

    return children;
}


export default ProtectedRoute



