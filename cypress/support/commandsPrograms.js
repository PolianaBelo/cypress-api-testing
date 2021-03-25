import {setCommonHeaders} from './commands';

Cypress.Commands.add('createProgram', createProgram);
Cypress.Commands.add('getProgram', getProgram);

function createProgram(payload) {
    return cy.request({
        method: 'POST', 
        url: '/programs',
        failOnStatusCode: false,
        headers: setCommonHeaders(),
        body: payload
    });
};

function getProgram(programId) {
    return cy.request({
        method: 'GET', 
        url: '/programs/'+programId,
        headers: setCommonHeaders()
    });
};