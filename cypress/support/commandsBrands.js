import {setCommonHeaders} from './commands';

Cypress.Commands.add('createBrand', createBrand);
Cypress.Commands.add('getBrand', getBrand);

function createBrand(payload) {
    return cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: '/brands',
        headers: setCommonHeaders(),
        body: payload
    });
};

function getBrand(brandId) {
    return cy.request({
        method: 'GET', 
        url: '/brands/'+brandId,
        headers: setCommonHeaders()
    });
};