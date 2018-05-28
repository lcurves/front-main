import auth0 from 'auth0-js';
import EventEmitter from 'event-emitter';
import {Logger} from '../../../util/log';

export interface IAuthService {
    handleAuthentication();

    /*
        authNotifier: EventEmitter;
        userProfile?: object | null;
        getData(): Promise<any>;
        logout();
        isAuthenticated(): Boolean;
        login();
        auth0: auth0.WebAuth;*/
}


class AuthService {
    logger: Logger = new Logger();
    authNotifier = new EventEmitter();

    userProfile?: object | null;

    constructor() {
        this.login = this.login.bind(this);
        this.setSession = this.setSession.bind(this);
        this.logout = this.logout.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                }
            });
        });

    }

    getData() {
        return new Promise((resolve, reject) => {
            this.auth0.client.userInfo(localStorage.access_token, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    private setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        this.authNotifier.emit('authChange', {authenticated: true});
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.userProfile = null;
        this.authNotifier.emit('authChange', false);
        // navigate to the home route
    }

    isAuthenticated(): Boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    auth0 = new auth0.WebAuth({
        domain: 'lcurves.auth0.com',
        clientID: 'Q8pbEgsB5TsB97pJFEE5tQHSg9bIOmAE',
        redirectUri: 'http://localhost:8080/oauth-return',
        audience: 'https://lcurves.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile email phone'
    });

    login() {
        this.auth0.authorize();
    }
}


export default new AuthService();

