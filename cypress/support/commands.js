import "cypress-localstorage-commands";
import {createProgram, getProgram} from './commandsPrograms';
import {createBrand, getBrand} from './commandsBrands';
import {createLocation} from './commandsLocation';
import {authenticate} from './commandsAuthentication';

Cypress.config('baseUrl', 'https://api.fidel.uk/v1');

export function setCommonHeaders() {
    return {
        'content-type': 'application/json',
        'authorization': 'Bearer '+ localStorage.getItem('authHeader'),
        'fidel-key': 'dashboard_' + localStorage.getItem('idToken'),
        'fidel-live': 'false',
        'fidel-version': '2019-03-05',
        'origin': 'https://dashboard.fidel.uk',
        'referer':'https://dashboard.fidel.uk/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site'
    }
}