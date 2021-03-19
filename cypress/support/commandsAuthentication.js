import jwt_decode from "jwt-decode";
import authData from '../fixtures/authData.json';

Cypress.Commands.add('authenticate', authenticate);
Cypress.config('baseUrl', 'https://api.fidel.uk/v1');

let authHeaders = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9',
    'cache-control': 'max-age=0',
    'content-length': '175',
    'content-type': 'application/x-amz-json-1.1',
    'origin': 'https://dashboard.fidel.uk',
    'referer': 'https://dashboard.fidel.uk/',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'x-amz-target': 'AWSCognitoIdentityProviderService.InitiateAuth',
    'x-amz-user-agent': 'aws-amplify/0.1.x js'
}

function authenticate() {
    return cy.request({
        method: 'POST',
        url: 'https://cognito-idp.eu-west-1.amazonaws.com/',
        headers: authHeaders,
        body: {
            'AuthFlow': 'USER_PASSWORD_AUTH',
            'ClientId': '2l84ru0poltttsr6o28661dbt8',
            'AuthParameters': authData.authPayload,
            'ClientMetadata': {}
        }
    }).then((response) => {
        var authIdToken = decodeToken(response.body.AuthenticationResult.IdToken);
        var permissionData = JSON.parse(authIdToken.permission);

        window.localStorage.setItem('authHeader', response.body.AuthenticationResult.IdToken);
        window.localStorage.setItem('idToken', permissionData.credentialId);
    })
};

function decodeToken(idToken) {
    var decodedIdToken = jwt_decode(idToken);
    return decodedIdToken;
}