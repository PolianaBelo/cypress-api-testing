import "cypress-localstorage-commands";

describe('Create Location 201', () => {

    Cypress.config('baseUrl', 'https://api.fidel.uk/v1');
    let authPayload;
    let locationRequestData;

    before(() => {
        cy.fixture('authData.json').then((data) => {
            authPayload = data.authPayload
        });
        cy.fixture('locationData.json').then((data) => {
            locationRequestData = data.locationRequestData
        });
    });

    beforeEach(() => {
        cy.authenticate(authPayload);

        cy.createProgram({ 'name': "Program" + Math.random().toString() }).then((response) => {
            window.localStorage.setItem('programId', response.body.items[0].id);
        }).then(() => {locationRequestData.pathParam = localStorage.getItem('programId');});

        cy.createBrand({ 'name': "Brand" + Math.random().toString() }).then((response) => {
            window.localStorage.setItem('brandId', response.body.items[0].id);
        }).then(() => {locationRequestData.payload.brandId = localStorage.getItem('brandId');});
    });

    it('Should creat a progam and let the inserted location available through get request', () => {
        cy.createLocation(locationRequestData).then((response) => {
            expect(response.status).to.eq(201);
        })
    });

    it('Shoud return 400 - Bad Request - Invalid schema - Missing Address', () => {
        delete locationRequestData.payload['address'];
        cy.createLocation(locationRequestData).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error.message).to.eq('Invalid schema');
            expect(response.body.error.metadata[0].message).to.eq('should have required property \'address\'');
        })
    });
});