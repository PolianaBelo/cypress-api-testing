import "cypress-localstorage-commands";

describe('Create Location validations', () => {
    let locationRequestData;
    let nameComplement = Math.random().toString();

    before(() => {
        cy.authenticate();
        cy.fixture('locationData.json').then((data) => {
            locationRequestData = data.locationRequestData
        });
        cy.saveLocalStorage();
    });

    before(() => {
        cy.createProgram({ 'name': "Program" + nameComplement }).then((response) => {
            window.localStorage.setItem('programId', response.body.items[0].id);
        }).then(() => { locationRequestData.pathParam = localStorage.getItem('programId'); });

        cy.createBrand({ 'name': "Brand" + nameComplement }).then((response) => {
            window.localStorage.setItem('brandId', response.body.items[0].id);
        }).then(() => { locationRequestData.payload.brandId = localStorage.getItem('brandId'); });
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    it('Should creat a progam and let the inserted location available through get request', () => {
        cy.createLocation(locationRequestData).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('items');
            expect(cy.getLocation(response.body.items[0].id).then((response) => { expect(response.status).to.eq(200) }));
        })
    });

    it('Should return 400 - Bad Request - Invalid schema - Missing Address', () => {
        delete locationRequestData.payload['address'];
        cy.createLocation(locationRequestData).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error.message).to.eq('Invalid schema');
            expect(response.body.error.metadata[0].message).to.eq('should have required property \'address\'');
        })
    });
});