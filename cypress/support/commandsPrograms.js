Cypress.Commands.add('createProgram', createProgram);

function createProgram(payload) {
    return cy.request({
        method: 'POST', 
        url: '/programs',
        failOnStatusCode: false,
        headers: {
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
        },
        body: payload
    })
}