import "cypress-localstorage-commands";

describe('Create Programs 201', () => {
    
    Cypress.config('baseUrl', 'https://api.fidel.uk/v1');

    beforeEach(() => {
        cy.authenticate();
      });

    it('Should creat a progam and return 201 and itens in JSON data', () => {
        var payload = {name: "Program" + Math.random().toString()};
        cy.createProgram(payload).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('items');
        })
    });

    it('Shoud return 400 - Bad Request - should have required property name', () => {
        cy.createProgram({}).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error.message).to.eq('Invalid schema')
            expect(response.body.error.metadata[0].message).to.eq('should have required property \'name\'');
        })
    });
});