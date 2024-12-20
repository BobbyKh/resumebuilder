import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
// import { GOOGLE_ACCESS_TOKEN } from "./Token";


function RedirectGoogleAuth() {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("RedirectGoogleAuth mounted");
        
        const queryParams = new URLSearchParams(window.location.search);
        const accessToken = queryParams.get("access_token");
        const google_access_token = queryParams.get("google_access_token");
        
        console.log("Query Params:", window.location.search);
        console.log("Access Token:", accessToken);
    
        if (accessToken && google_access_token) {
            console.log("Storing access token...");
            localStorage.setItem(google_access_token, accessToken);
            
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            axios.get("http://127.0.0.1:8000/api/auth/user/").then((response) => {
                console.log("User details:", response.data);
                navigate("/"); // Redirect to home on successful token validation
            }).catch((error) => {
                console.error("Error fetching user details:", error.response ? error.response.data : error.message);
                navigate("/login"); // Redirect to login on error
            });
    
        } else {
            console.log("Access Token not found in URL");
            navigate("/login");
        }
    }, [navigate]);
    
    return <div> Logging in .............................</div>

}

export default RedirectGoogleAuth;