import { AuthorizationService } from "../services/AuthorizationService";

export default function Login() {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    AuthorizationService.getToken(code);



    return(
        <h1>nube</h1>
    )
}