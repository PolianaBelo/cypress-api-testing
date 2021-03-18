Cypress.Commands.add('createLocation', createLocation);
Cypress.Commands.add('getLocation', getLocation);

let locationHeaders = {
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

function createLocation(requestData) {
    return cy.request({
        method: 'POST',
        url: '/programs/'+requestData.pathParam+'/locations',
        failOnStatusCode: false,
        headers: locationHeaders,
        body: requestData.payload
    });
};

function getLocation(locationId) {
    return cy.request({
        method: 'GET', 
        url: '/locations/'+locationId,
        headers: locationHeaders
    });
};