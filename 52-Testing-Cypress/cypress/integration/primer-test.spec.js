/// <reference types="cypress"/>
describe('Cargar la página principal', () => {

    it('Carga la página', () => {

        cy.visit('/index.html');

        // Verifica que exista un texto
        cy.contains('[data-cy="titulo-proyecto"]','Administrador de Pacientes de Veterinaria');

        // Verifica que exista un elemento
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        // Verifica que exista y que el texto sea igual
        cy.get('[data-cy=titulo-proyecto]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria')
        
        cy.get('[data-cy=titulo-proyecto]')
            .invoke('text')
            .should('not.equal', 'Orlando')

        cy.get('[data-cy=titulo-heading]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')
    })

})