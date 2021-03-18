import "cypress-localstorage-commands";

describe('Create Brand success', () => {
    Cypress.config('baseUrl', 'https://api.fidel.uk/v1');
    let authPayload;
    let invalidSchemaBrandPayload;
    let repeatedBrandPayload;

    before(() => {
        cy.fixture('authData.json').then((data) => {
            authPayload = data.authPayload
        });
        cy.fixture('brandData.json').then((data) => {
            repeatedBrandPayload = data.repeatedBrandPayload;
            invalidSchemaBrandPayload = data.invalidSchemaBrandPayload;
        });
    });

    beforeEach(() => {
        cy.authenticate(authPayload);
    });

    it('Should return 201 and let the inserted brand available through get request', () => {
        var payload = { 'name': "Brand" + Math.random().toString() };
        cy.createBrand(payload).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('items');
            expect(cy.getBrand(response.body.items[0].id).then((response) => { expect(response.status).to.eq(200) }));
        })
    });

    it('Shoud return 400 - Bad Request - Item already exists', () => {
        cy.createBrand(repeatedBrandPayload).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error.message).to.eq('Item already exists');
        })
    });

    it('Shoud return 400 - Bad Request - should have required property name', () => {
        cy.createBrand(invalidSchemaBrandPayload).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error.message).to.eq('Invalid schema');
            expect(response.body.error.metadata[0].message).to.eq('should have required property \'name\'');
        })
    });
});