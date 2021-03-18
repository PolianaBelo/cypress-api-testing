import "cypress-localstorage-commands";
import {createProgram} from './commandsPrograms';
import {createBrand, getBrand} from './commandsBrands';
import {createLocation} from './commandsLocation';
import {authenticate} from './commandsAuthentication';

// Cypress.Commands.add("authenticate", () => {
//     cy.request({
//         method: 'POST', 
//         url: 'https://cognito-idp.eu-west-1.amazonaws.com/',
//         headers: {
//             'accept': '*/*',
//             'accept-encoding': 'gzip, deflate, br',
//             'accept-language': 'pt-BR,pt;q=0.9',
//             'cache-control': 'max-age=0',
//             'content-length': '175',
//             'content-type': 'application/x-amz-json-1.1',
//             'origin': 'https://dashboard.fidel.uk',
//             'referer': 'https://dashboard.fidel.uk/',
//             'sec-fetch-dest': 'empty',
//             'sec-fetch-mode' : 'cors',
//             'sec-fetch-site': 'cross-site',
//             'x-amz-target': 'AWSCognitoIdentityProviderService.InitiateAuth',
//             'x-amz-user-agent': 'aws-amplify/0.1.x js'
//         },
//         body: {
//             "AuthFlow":"USER_PASSWORD_AUTH",
//             "ClientId":"2l84ru0poltttsr6o28661dbt8",
//             "AuthParameters":{"USERNAME":"poli.vieira.belo@gmail.com","PASSWORD":"Cesar@321"},
//             "ClientMetadata":{}
//         }
//     }).then((response) => {
//         var authIdToken = decodeToken(response.body.AuthenticationResult.IdToken);
//         var permissionData = JSON.parse(authIdToken.permission);
//         cy.log(JSON.stringify(permissionData.credentialId));
//         //var accountId = JSON.stringify(authIdToken.permission);
//         window.localStorage.setItem("authHeader", response.body.AuthenticationResult.IdToken);
//         window.localStorage.setItem("idToken", permissionData.credentialId);
//         //window.localStorage.setItem("idToken", 'sk_test_50ea90b6-2a3b-4a56-814d-1bc592ba4d63');
//         //window.localStorage.setItem("idToken", 'sk_test_50ea90b6-2a3b-4a56-814d-1bc592ba4d63');
//     })
// });

