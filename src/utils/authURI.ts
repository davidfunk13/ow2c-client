const authURI = new URL(String(import.meta.env.VITE_APP_AUTH_URI));
console.log(window.location.origin);
authURI.searchParams.append("client_id", String(import.meta.env.VITE_APP_CLIENT_ID));
authURI.searchParams.append("scope", String(import.meta.env.VITE_APP_AUTH_SCOPE));
authURI.searchParams.append("redirect_uri", `${window.location.origin}/callback`);
authURI.searchParams.append("response_type", "code");

export default authURI;
