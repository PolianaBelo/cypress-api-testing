import "cypress-localstorage-commands";

describe('Create Programs validations', () => {
    let invalidSchemaProgramPayload;

    before(() => {
        cy.authenticate();
        cy.saveLocalStorage();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    it('Should creat a progam and return 201 and itens in JSON data', () => {
        var payload = { name: "Program" + Math.random().toString() };
        cy.createProgram(payload).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('items');
            expect(cy.getProgram(response.body.items[0].id).then((response) => { expect(response.status).to.eq(200) }));
        })
    });

    before(() => {
        cy.fixture('programData.json').then((data) => {
            invalidSchemaProgramPayload = data.invalidSchemaProgramPayload;
        });
    });

    it('Shoud return 400 - Bad Request - should have required property name', () => {
        cy.createProgram(invalidSchemaProgramPayload).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error.message).to.eq('Invalid schema')
            expect(response.body.error.metadata[0].message).to.eq('should have required property \'name\'');
        })
    });
});