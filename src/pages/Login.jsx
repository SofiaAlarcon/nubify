import { AuthorizationService } from "../services/AuthorizationService";

export default function Login() {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code'); //Esto no sé si va acá o en App.jsx

    AuthorizationService.getToken;



    return(
        <h1>nube</h1>
    )
}