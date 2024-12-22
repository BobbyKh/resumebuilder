import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { GOOGLE_ACCESS_TOKEN } from "./Token";


function RedirectGoogleAuth() {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("RedirectGoogleAuth mounted");

        const queryParams = new URLSearchParams(window.location.search);
        const accessToken = queryParams.get("access_token");

        console.log ("Query Params:",window.location.search);


        if (accessToken) {
            console.log("Access Token:", accessToken);
            localStorage.setItem(GOOGLE_ACCESS_TOKEN, accessToken);
            

            //verify 

            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            axios.get ("http://127.0.0.1:8000/api/auth/user/").then((response) => {
                console.log('User details:', response.data);
                navigate("/");
            }).catch((error) => {
                console.log('Error fetching user details:', error.response? error.response.data : error.message);
                navigate("/login");
            });


                


        }else{
            console.log("Access Token not found");
            navigate("/login");
        }
        }, [navigate]);
    return <div> Logging in .............................</div>

}

export default RedirectGoogleAuth;