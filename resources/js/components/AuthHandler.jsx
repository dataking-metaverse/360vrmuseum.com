import React from "react";


type AuthListenerProps = {

};



const cookieRegistry = [];

function readCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function listenCookieChange(cookieName, callback) {
    setInterval(function() {
        console.log('ff', cookieRegistry);
        if (cookieRegistry[cookieName]) {
            if (readCookie(cookieName) != cookieRegistry[cookieName]) {
                // update registry so we dont get triggered again
                cookieRegistry[cookieName] = readCookie(cookieName);
                return callback();
            }
        } else {
            cookieRegistry[cookieName] = readCookie(cookieName);
        }
    }, 100);
}


export default class AuthListener extends React.Component<AuthListenerProps> {
    componentDidMount() { listenCookieChange('360vrmuseum_session', () => console.log('token changed')) }
    render() { return null; }
}
