Cypress.Commands.add('createBrand', createBrand);
Cypress.Commands.add('getBrand', getBrand);

let brandHeaders = {
    'content-type': 'application/json',
    'authorization': 'Bearer '+ localStorage.getItem('authHeader'),
    'fidel-key': "dashboard_" + localStorage.getItem('idToken'),
    'fidel-live': 'false',
    'fidel-version': '2019-03-05',
    'origin': 'https://dashboard.fidel.uk',
    'referer':'https://dashboard.fidel.uk/',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site'
}

function createBrand(payload) {

    return cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: '/brands',
        headers: brandHeaders,
        body: payload
    });
};

function getBrand(brandId) {
    return cy.request({
        method: 'GET', 
        url: '/brands/'+brandId,
        headers: brandHeaders
    });
};