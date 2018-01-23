import auth0 from 'auth0-js';

export default class AuthService {

  constructor() {
    this.login = this.login.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: 'lcurves.auth0.com',
    clientID: 'Q8pbEgsB5TsB97pJFEE5tQHSg9bIOmAE',
    redirectUri: 'http://localhost:8080/callback',
    audience: 'https://lcurves.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
