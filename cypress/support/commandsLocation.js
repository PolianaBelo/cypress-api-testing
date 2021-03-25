import {setCommonHeaders} from './commands';

Cypress.Commands.add('createLocation', createLocation);
Cypress.Commands.add('getLocation', getLocation);

function createLocation(requestData) {
    return cy.request({
        method: 'POST',
        url: '/programs/'+requestData.pathParam+'/locations',
        failOnStatusCode: false,
        headers: setCommonHeaders(),
        body: requestData.payload
    });
};

function getLocation(locationId) {
    return cy.request({
        method: 'GET', 
        url: '/locations/'+locationId,
        headers: setCommonHeaders()
    });
};