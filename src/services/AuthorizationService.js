import getCodeChallengeAndCodeVerifier from "./CodeChallenge";

const AuthConstants = {
    clientId : import.meta.env.VITE_CLIENT_ID,
    redirectUri : encodeURI('http://localhost:5173/login'),
    scope : 'user-library-read',
    authUrl : new URL("https://accounts.spotify.com/authorize"),
    tokenUrl : new URL ("https://accounts.spotify.com/api/token"),
}

export const AuthorizationService = {

    getUserAuthorization: function() {
        getCodeChallengeAndCodeVerifier()
            .then(value => {
                const codeChallenge = value.codeChallenge;
                const codeVerifier = value.codeVerifier;
            
                window.localStorage.setItem('code_verifier', codeVerifier);
            
                const params =  {
                    client_id: AuthConstants.clientId,
                    scope: AuthConstants.scope,
                    code_challenge_method: 'S256',
                    code_challenge: codeChallenge,
                    redirect_uri: AuthConstants.redirectUri,
                    response_type: 'code',
                }
            
                AuthConstants.authUrl.search = new URLSearchParams(params).toString();
                window.location.href = AuthConstants.authUrl.toString();
            })
    },

    getToken: async function (code) {

        // stored in the previous step
        let codeVerifier = localStorage.getItem('code_verifier');
    
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: AuthConstants.clientId,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: AuthConstants.redirectUri,
                code_verifier: codeVerifier,
            }),
        }
    
        const body = await fetch(AuthConstants.tokenUrl, payload);
        const response =await body.json();
    
        localStorage.setItem('access_token', response.access_token);
    }
} 
