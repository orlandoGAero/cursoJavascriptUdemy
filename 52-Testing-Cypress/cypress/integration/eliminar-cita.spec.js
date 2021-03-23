/// <reference types="cypress"/>
describe('Llena los campos, elimina la cita', () => {

    it('Llenar campos y agrega cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hachi')

        cy.get('[data-cy="propietario-input"]')
            .type('Orlando')

        cy.get('[data-cy="telefono-input"]')
            .type('45451441211')

        cy.get('[data-cy="fecha-input"]')
            .type('2021-03-08')

        cy.get('[data-cy="hora-input"]')
            .type('20:00')

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Tiene comezón en la piel')
        
        cy.get('[data-cy="submit-cita"]')
            .click()

        cy.get('[data-cy="titulo-heading"]')
            .invoke('text')
            .should('equal','Administra tus Citas')

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Se agregó correctamente')

        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-success')
    });

    it('Elimina cita', () => {
        cy.get('[data-cy="btn-eliminar"]').click()

        cy.get('[data-cy="titulo-heading"]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una')

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Se elimino correctamente')

        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-success')

    })

})