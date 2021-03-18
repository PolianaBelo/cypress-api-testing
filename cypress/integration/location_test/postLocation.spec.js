import "cypress-localstorage-commands";

describe('Create Location 201', () => {

    Cypress.config('baseUrl', 'https://api.fidel.uk/v1');

    let requestData = {
        // pathParam: localStorage.getItem('programId'),
        pathParam: '',
        payload: {
            'address': 'Street',
            //'brandId': localStorage.getItem('brandId'),
            'brandId': '',
            'city': 'City',
            'countryCode': 'GBR',
            'postcode': 'W1D 3PX'
        }
    };

    beforeEach(() => {
        cy.authenticate();
        cy.createProgram({ 'name': "Program" + Math.random().toString() }).then((response) => {
            window.localStorage.setItem('programId', response.body.items[0].id);
        });
        cy.createBrand({ 'name': "Brand" + Math.random().toString() }).then((response) => {
            window.localStorage.setItem('brandId', response.body.items[0].id);
        });
    });

    it('Should creat a progam and let the inserted location available through get request', () => {
        cy.createLocation(requestData).then((response) => {
            expect(response.status).to.eq(201);
        })
    });

    it('Shoud return 400 - Bad Request - Invalid schema - Missing Address', () => {
        requestData.pathParam = localStorage.getItem('programId');
        requestData.payload.brandId = localStorage.getItem('brandId');
        delete requestData.payload['address'];

        cy.createLocation(requestData).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error.message).to.eq('Invalid schema');
            expect(response.body.error.metadata[0].message).to.eq('should have required property \'address\'');
        })
    });
});