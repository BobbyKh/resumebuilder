import { useState, useEffect } from "react";    
import {jwtDecode} from 'jwt-decode';
import { api } from "../api/Api";
import { ACCESS_TOKEN, REFRESH_TOKEN, GOOGLE_ACCESS_TOKEN } from "./Token";

export const useAuthentication = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const auth = async () => {
            const token = localStorage.getItem(ACCESS_TOKEN);
            const googleAccessToken = localStorage.getItem(GOOGLE_ACCESS_TOKEN);

            console.log('ACCESS_TOKEN:', token || 'None');
            console.log('GOOGLE_ACCESS_TOKEN:', googleAccessToken || 'None');

            if (token) {
                try {
                    const decoded = jwtDecode(token);
                    const tokenExpiration = decoded?.exp;
                    const now = Date.now() / 1000;

                    if (tokenExpiration && tokenExpiration < now) {
                        await refreshToken();
                    } else {
                        setIsAuthorized(true);
                    }
                } catch (error) {
                    console.error("JWT decode error:", error);
                    setIsAuthorized(false);
                }
            } else if (googleAccessToken) {
                const isGoogleTokenValid = await validateGoogleToken(googleAccessToken);
                console.log("Google token validation result:", isGoogleTokenValid);
                setIsAuthorized(isGoogleTokenValid);
            } else {
                setIsAuthorized(false);
            }
        };
        auth().catch(() => setIsAuthorized(false));
    }, []); 


    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (!refreshToken) {
            console.error('No refresh token found');
            setIsAuthorized(false);
            return;
        }
        try {
            const res = await api.post('/token/refresh/', { refresh: refreshToken });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                console.error('Failed to refresh token:', res.status);
                setIsAuthorized(false);
            }
        } catch (error) {
            console.error('Error refreshing token', error);
            setIsAuthorized(false);
        }
    };

    const validateGoogleToken = async (googleAccessToken: string) => {
        try {
            const res = await api.post('/google/validate_token/', {
                access_token: googleAccessToken,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Validated response:", res.data);
            return res.data.valid;
        } catch (error) {
            console.error('Error validating Google token:', error);
            return false;
        }  
    };

    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(GOOGLE_ACCESS_TOKEN);
        setIsAuthorized(false);
        window.location.reload();
    };

    return { isAuthorized, logout };
};

