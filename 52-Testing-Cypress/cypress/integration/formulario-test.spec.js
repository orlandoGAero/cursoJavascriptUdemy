/// <reference types="cypress"/>

describe('valida formulario', () => {
    it('submit a formulario', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="formulario"]')
            .submit()

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Todos los campos son Obligatorios')

        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-danger')
    })
})