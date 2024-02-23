import { AuthorizationService } from "../services/AuthorizationService";
import { useEffect } from "react";

export default function Login() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get('code');
        AuthorizationService.getToken(code);
    }, []);

    
    return(
        <h1>nube</h1>
    )
}